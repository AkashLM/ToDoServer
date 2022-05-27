const express = require("express");
const fs = require("fs");
const app = express();
const { readFile, writeFile } = fs;
const patchRequest = (req, res) => {
  readFile("./database.json", "utf8", (Error, DataFromFile) => {
    if (Error) {
      res.status(500).json({
        status: "Error",
        message: "Error reading JSON",
      });
    } else {
      const ParsedDataFromFile = JSON.parse(DataFromFile);
      const whatToUpdate = req.query.toUpdate;
      const { body } = req;
      const Index = ParsedDataFromFile.findIndex(
        (Item) => Item.TitleOfToDo == whatToUpdate
      );
      if (Index == -1) {
        res.status(500).json({
          status: "Error",
          message: "Data not found",
        });
        return;
      }

      const { TitleOfToDo, DescriptionOfToDo, TargetTime, CurrentTime } =
        ParsedDataFromFile[Index];
      const UpdatedData = {
        TitleOfToDo: body.TitleOfToDo || TitleOfToDo,
        DescriptionOfToDo: body.DescriptionOfToDo || DescriptionOfToDo,
        TargetTime: body.TargetTime || TargetTime,
        CurrentTime: body.CurrentTime || CurrentTime,
      };

      ParsedDataFromFile[Index] = UpdatedData;
      writeFile(
        "./database.json",
        JSON.stringify(ParsedDataFromFile),
        "utf8",
        (Error) => {
          if (Error) {
            res.status(500).json({
              status: "Error",
              message: "Error in adding database.json",
            });
          } else {
            res.status(200).json({
              status: "Success",
              message: "Data updated successfully !",
            });
          }
        }
      );
    }
  });
};

module.exports = {
  patchRequest,
};
