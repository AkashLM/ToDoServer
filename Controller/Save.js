const express = require("express");
const fs = require("fs");
const app = express();
const { readFile, writeFile } = fs;

const postRequest = (req, res) => {
    const { TitleOfToDo, DescriptionOfToDo, TargetTime, CurrentTime } = req.body;
  
    readFile("./database.json", "utf8", (Error, DataFromFile) => {
      if (Error) {
        res.status(500).json({
          status: "Error",
          message: "Error reading JSON",
        });
      } else {
        //Checking Null Values
        if (!TitleOfToDo || !DescriptionOfToDo || !TargetTime || !CurrentTime) {
          res.status(500).json({
            status: "Error",
            message: "Empty input from user",
          });
          return;
        }
  
        const ParsedDataFromFile = JSON.parse(DataFromFile);
        //Checking Data Duplications
        ParsedDataFromFile.map((Item) => {
          if (Item.TitleOfToDo == TitleOfToDo) {
            res.status(500).json({
              status: "Error",
              message: "Name already exists",
            });
            return;
          }
        });
  
        const NewData = [
          ...ParsedDataFromFile,
          { TitleOfToDo, DescriptionOfToDo, TargetTime, CurrentTime },
        ];
        writeFile("./database.json", JSON.stringify(NewData), "utf8", (Error) => {
          if (Error) {
            res.status(500).json({
              status: "Error",
              message: "Error in adding database.json",
            });
          }
  
          res.status(200).json({
            status: "Success",
            message: "Data added successfully !",
  
            data: NewData,
          });
          // console.log(NewData);
        });
      }
    });
  };

module.exports = {
  postRequest,
};
