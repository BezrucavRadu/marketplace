const cors = require("cors");
const express = require("express");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");

const auth = require("./auth");
const authorizedMiddleware = require("./authorized");

const PORT = 3000;
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/api", auth);

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
