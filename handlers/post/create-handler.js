const { Post } = require("../../models");
module.exports = CreateBlog = (req, res) => {
  const blog = req.body;

  Post.create({
    post: blog.post,
    userid: blog.userid,
  })
    .then((result) => {
      return res.status(200).send({ result });
    })
    .catch((error) => {
      return res.status(400).send(error);
    });
};
