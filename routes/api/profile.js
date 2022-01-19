const express = require("express");

const routes = express.Router();

// @route GET api/profile
//@Des  Test route
//@access  Public
routes.get("/", (req, res) => res.send("profile routes running"));

module.exports = routes;
