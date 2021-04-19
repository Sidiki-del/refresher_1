const env = require("dotenv").config();
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const nodemailer = require("nodemailer");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(express.static("public"));


app.get("/", function (req, res) {
    res.render("index");
});

app.get("/about", function (req, res) {
    res.render("about");
});

app.get("/pricing", function (req, res) {
    res.render("pricing");
});






const PORT = process.env.PORT || 5000;

app.listen(PORT, function () {
    console.log("Server is running on port " + "" + PORT);
});