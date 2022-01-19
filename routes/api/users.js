const express = require("express");
const routes = express.Router();
const { check, validationResult } = require("express-validator/check");

// @route POST api/user
//@Des  Test route
//@access  Public
routes.post(
  "/",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check(
      "password",
      "Please Enter Password with 6 or more characktera"
    ).isLength({ min: 6 }),
  ],
  (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ error: error.array() });
    }
    console.log(req.body);
    res.send("user routes running");
  }
);

module.exports = routes;
