const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

mongoose.connect("mongodb://localhost:27017/newDB")
  .then((res) => {
    console.log("database is connected");
  })
  .catch((err) => {
    console.log("disconnected");
  });

const port = 7000;

const productRoute = require("./src/route/product.route")
app.use("/product", productRoute)

app.listen(port, function () {
  console.log("server is running on port", port);
});
