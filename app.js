const express = require("express");
const { stringify } = require("querystring");
const app = express();
const { getRequest } = require("./Controller/Find");
const { postRequest } = require("./Controller/Save");
const { patchRequest } = require("./Controller/Update");
const { deleteRequest } = require("./Controller/Delete");
const { noRoute } = require("./Controller/RouteManager");
const { MySchema } = require("./MongooseDatabase/MongooseSetup");
// Environment variables setup
const { PORT } = require("./EnvSetup");
const { default: mongoose } = require("mongoose");
//Middleware for parsing body from request
app.use(express.json());
//Authentication using Middleware
app.use((req, res, next) => {
  const Key = req.query.key;
  if (Key == "Developer") {
    next();
  } else {
    res.send("Authentication Error");
  }
});
app
  .route("/")
  .get(getRequest)
  .post(postRequest)
  .patch(patchRequest)
  .delete(deleteRequest);
app.route("*").all(noRoute);
const CreatedDB = mongoose.model("ToDoModel", MySchema);
CreatedDB.create({
  TitleOfToDo: "Work from home",
  DescriptionOfToDo: "lorem ipsum and lorem desum",
  TargetTime: "14515",
  CurrentTime: "12754",
});

app.listen(PORT, () => {
  console.log("Listening on port:", PORT);
});
