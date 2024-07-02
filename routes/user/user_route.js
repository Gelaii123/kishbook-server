const express = require("express");
const { SelectUserWithPost } = require("../../handlers/user/select-handler");

const user_routes = express.Router();

user_routes.get("/with-post", SelectUserWithPost);

module.exports = { user_routes };
