const express = require("express");
const createHandler = require("../../handlers/post/create-handler");
const { middleware } = require("../../middleware/middleware");
const { SelectAllPost } = require("../../handlers/post/select-handler");

const post_routes = express.Router();

post_routes.post("/create", middleware, createHandler);
post_routes.get("/all", middleware, SelectAllPost);
module.exports = { post_routes };
