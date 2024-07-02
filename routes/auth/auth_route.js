const express = require("express");
const { SignUp } = require("../../handlers/auth/signup-hanlder");
const { middleware } = require("../../middleware/middleware");
const signinHandler = require("../../handlers/auth/signin-handler");

const auth_routes = express.Router();

auth_routes.post("/sign-up", SignUp);
auth_routes.post("/sign-in", signinHandler);
module.exports = { auth_routes };
