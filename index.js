const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose
  .connect(
    "mongodb+srv://admin:5ny^qighwMsdc3@cluster0.x6iku.mongodb.net/FastShion?retryWrites=true&w=majority"
  )
  .then(() => console.log("DB Connection Successful"))
  .catch((err) => {
    console.log(err);
  });

app.listen(5000, () => {
  console.log("Server is running");
});
