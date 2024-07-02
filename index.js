const db = require("./models");
const express = require("express");
const cors = require("cors");

const { middleware } = require("./middleware/middleware");
const { routes } = require("./routes");
const app = express();
var corsOption = {
  origin: "http://localhost:8000",
};

app.use(cors(corsOption));
app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to kishbook" });
});

app.get("/post", (req, res) => {
  res.send({ message: "Post" });
});

app.use("/api", routes);
db.sequelize.sync().then((require) => {
  const PORT = process.env.PORT || 8080;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });
});
