const express = require("express");
const fs = require("fs");
const app = express();
const { readFile, writeFile } = fs;
const getRequest = (req, res) => {
  //Reading JSON Files
  readFile("./database.json", "utf8", (Error, DataFromFile) => {
    if (Error) {
      res.status(500).json({
        status: "Error",
        message: "Error reading JSON",
      });
    } else {
      ParsedDataFromFile = JSON.parse(DataFromFile);
      res.status(200).json({
        status: "Success",
        message: "Data found successfully !",
        data: ParsedDataFromFile,
      });
    }
  });
};

module.exports = {
  getRequest,
};
