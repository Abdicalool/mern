const express = require("express");

const routes = express.Router();

// @route GET api/post
//@Des  Test route
//@access  Public
routes.get("/", (req, res) => res.send("post routes running"));

module.exports = routes;
