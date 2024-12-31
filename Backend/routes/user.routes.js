const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const userController = require("../controllers/user.controller");

// USER REGISTER
router.post(
  "/register",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("fullname.firstname")
      .isLength({ min: 3 })
      .withMessage("First Name should contain atleast 3 characters."),
    body("password")
      .isLength({ min: 8 })
      .withMessage("Password should contain atleast 8 Characters."),
  ],
  userController.registerUser
);

// USER LOGIN
router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("password")
      .isLength({ min: 8 })
      .withMessage("Password should contain atleast 8 Characters."),
  ],
  userController.loginUser
);

module.exports = router;
