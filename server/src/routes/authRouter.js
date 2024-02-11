const checkErrorValidateMiddleware = require("../middleware/checkErrorValidateMiddleware.js");
const signUpValidationRules = require("../validate/signUpValidationRules")
const signInValidationRules = require("../validate/signInValidationRules")

const express = require("express")
const router = express.Router();

const authMiddleware = require('../middleware/authMiddleware.js')
const authController = require('../controllers/authController.js')

router.post(
  "/signup",
  signUpValidationRules(),
  checkErrorValidateMiddleware,
  authController.signUp
);
router.post(
  "/signin",
  signInValidationRules(),
  checkErrorValidateMiddleware,
  authController.signIn
);

router.post("/auth", authMiddleware, authController.auth);
router.post("/logout", authMiddleware, authController.logOut);

module.exports = router
