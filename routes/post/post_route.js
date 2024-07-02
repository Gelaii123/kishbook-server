const express = require("express");
const createHandler = require("../../handlers/post/create-handler");

const post_routes = express.Router();

post_routes.post("/create", createHandler);

module.exports = { post_routes };
