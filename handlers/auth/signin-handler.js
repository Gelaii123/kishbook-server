const jwt = require("jsonwebtoken");
const { User } = require("../../models");
const { where } = require("sequelize");
module.exports = Signin = (req, res) => {
  const user = req.body;
  User.findOne({ where: { email: user.email } })
    .then((result) => {
      const token = jwt.sign(
        {
          email: result.email,
          password: result.password,
          userid: result.id,
        },
        process.env.JWT_SECRET_KEY
      );
      return res
        .status(200)
        .send({ result, message: "Login Successfully", token });
    })
    .catch((error) => {
      return res.status(400).send(error);
    });
};
