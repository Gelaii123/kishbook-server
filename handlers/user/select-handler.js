const { User, Post } = require("../../models");

const SelectUserWithPost = async (req, res) => {
  const user = req.body;

  await User.findAll({
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
