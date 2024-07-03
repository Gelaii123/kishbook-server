const verifyToken = require("../../utils/verifyToken");
const { Post, User } = require("../../models");
const SelectAllPost = async (req, res) => {
  //   const authHeader = req.headers["authorization"];
  //   const token = authHeader && authHeader.split(" ")[1];

  //   const decode = await verifyToken(token);
  //   const userid = decode.data.userid;

  await Post.findAll({
    include: [
      {
        model: User,
        as: "user",
        attributes: ["email", "id"],
      },
    ],
    order: [["id", "desc"]],
  })
    .then((result) => {
      return res.status(200).send({ result });
    })
    .catch((error) => {
      return res.status(400).send(error);
    });
};

module.exports = { SelectAllPost };
