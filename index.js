const db = require("./models");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { routes } = require("./routes");
const app = express();
var corsOption = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOption));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/api", routes);
db.sequelize.sync().then((require) => {
  const PORT = process.env.PORT || 8080;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });
});
