require("dotenv").config();

const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3500;

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`Server is running on port ${process.env.PORT || 3500}`);
});
