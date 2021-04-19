const env = require("dotenv").config();
const express = require("express");
const request = require("request");
const path = require("path");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const nodemailer = require("nodemailer");
const {
    response
} = require("express");
 


const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(express.static("public"));







const PORT = process.env.PORT || 5000;

app.listen(PORT, function () {
    console.log("Server is running on port " + "" + PORT);
});