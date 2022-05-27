const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://AkashMalekar:akash123@cluster0.raazx.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
//Checking for connection
mongoose.connection.on("open", () => {
  console.log("Connection Successful");
});

//Creating a schema for cluster
const MySchema = new mongoose.Schema({
  TitleOfToDo: String,
  DescriptionOfToDo: String,
  TargetTime: String,
  CurrentTime: String,
});
//Exporting module of Schema
module.exports = {
  MySchema,
};
