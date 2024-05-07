const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const highlighter = require('./routes/highlighterRoutes');
app.use("/api/v1", highlighter);


module.exports = app;