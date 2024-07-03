const jwt = require("jsonwebtoken");
const verifyToken = require("../utils/verifyToken");
const middleware = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token) {
    verifyToken(token)
      .then((result) => {
        result.isValid
          ? next()
          : res.status(401).send({ message: "UNAUTHORIZED" });
      })
      .catch((error) => {
        return res.status(400).send(error);
      });
  } else {
    return res.status(401).send({ message: "UNAUTHORIZED" });
  }
};
module.exports = { middleware };
