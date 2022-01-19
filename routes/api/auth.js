const express = require("express");

const routes = express.Router();

// @route GET api/auth
//@Des  Test route
//@access  Public
routes.get("/", (req, res) => res.send("auth routes running"));

module.exports = routes;
