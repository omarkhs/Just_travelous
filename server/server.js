const express = require('express');
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 5000;

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "EXPRESS BACKEND IS CONNECTED TO REACT" });
});

// set port, listen for requests
app.listen(port, () => console.log(`Listening on port ${port}`));