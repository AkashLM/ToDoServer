const express = require("express");
const fs = require("fs");
const app = express();
const { readFile, writeFile } = fs;
const deleteRequest = (req, res) => {
  readFile("./database.json", "utf8", (Error, DataFromFile) => {
    if (Error) {
      res.status(500).json({
        status: "Error",
        message: "Error reading JSON",
      });
    } else {
      const whatToDelete = req.query.toDelete;
      //   console.log(whatToDelete);
      const ParsedDataFromFile = JSON.parse(DataFromFile);
      const Index = ParsedDataFromFile.findIndex(
        (Item) => Item.TitleOfToDo == whatToDelete
      );
      if (Index == -1) {
        res.status(500).json({
          status: "Error",
          message: "Data not found",
        });
        return;
      }
      ParsedDataFromFile[Index] = {};
      writeFile(
        "./database.json",
        JSON.stringify(ParsedDataFromFile),
        "utf8",
        (Error) => {
          if (Error) {
            res.status(500).json({
              status: "Error",
              message: "Failed to delete !",
            });
            res.status(200).json({
              status: "Success",
              message: "Data delete successfully !",
            });
          }
        }
      );
    }
  });
};

module.exports = {
  deleteRequest,
};
