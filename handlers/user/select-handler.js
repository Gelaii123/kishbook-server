const { where } = require("sequelize");
const { User, Post } = require("../../models");
const verifyToken = require("../../utils/verifyToken");

const SelectUserWithPost = async (req, res) => {
  const user = req.body;
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  const decode = await verifyToken(token);
  const userid = decode.data.userid;
  await User.findAll({
    where: { id: userid },
    include: [
      {
        model: Post,
        as: "post",
      },
    ],
  })
    .then((result) => {
      return res.status(200).send({ result });
    })
    .catch((error) => {
      return res.status(400).send(error);
    });
};

module.exports = { SelectUserWithPost };
