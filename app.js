const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const highlighter = require('./routes/highlighterRoutes');
app.use("/", highlighter);


module.exports = app;