const dotenv = require("dotenv");
dotenv.config();
const API_KEY = process.env.API_KEY;

const express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");

const app = express();
app.use(cors());
// to use json
app.use(bodyParser.json());
// to use url encoded values
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(express.static("dist"));

app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
});

app.get("/get", function (req, res) {
  res.json(API_KEY);
});

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
  console.log("Example app listening on port 8081!");
  console.log(`Your API key is ${process.env.API_KEY}`);
});
