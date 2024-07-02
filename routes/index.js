const express = require("express");
const { auth_routes } = require("./auth/auth_route");
const { post_routes } = require("./post/post_route");
const { user_routes } = require("./user/user_route");

const routes = express.Router();

routes.use("/auth", auth_routes);
routes.use("/post", post_routes);
routes.use("/user", user_routes);
module.exports = { routes };
