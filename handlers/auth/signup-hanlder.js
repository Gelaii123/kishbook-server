const { User } = require("../../models");
const { v4: uuidv4 } = require("uuid");

const SignUp = async (req, res) => {
  const user = req.body;

  User.create({
    id: uuidv4(),
    email: user.email,
    password: user.password,
  })
    .then((result) => {
      return res.status(200).send({ result });
    })
    .catch((error) => {
      return res.status(400).send({ error });
    });
};

module.exports = { SignUp };
