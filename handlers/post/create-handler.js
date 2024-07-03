const { Post } = require("../../models");
const verifyToken = require("../../utils/verifyToken");
module.exports = CreateBlog = async (req, res) => {
  const blog = req.body;
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  const decode = await verifyToken(token);
  const userid = decode.data.userid;

  Post.create({
    post: blog.post,
    userid: userid,
  })
    .then((result) => {
      return res.status(200).send({ result });
    })
    .catch((error) => {
      return res.status(400).send(error);
    });
};
