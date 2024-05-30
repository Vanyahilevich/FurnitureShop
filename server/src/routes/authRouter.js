const checkErrorValidateMiddleware = require("../middleware/checkErrorValidateMiddleware.js");
const signUpValidationRules = require("../validate/signUpValidationRules")
const signInValidationRules = require("../validate/signInValidationRules")
const checkInEmail = require("../validate/check-in-email.js")

const upload = require("../multerConfig.js")

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
  "/login",
  signInValidationRules(),
  checkErrorValidateMiddleware,
  authController.login
);
router.post(
  "/changeEmail",
  authMiddleware,
  checkInEmail(),
  checkErrorValidateMiddleware,
  authController.changeEmail
 );





router.post("/auth", authMiddleware, authController.auth);
router.post("/logout", authMiddleware, authController.logOut);
router.post("/changeInfo", authMiddleware, authController.changeInfo);
router.post("/changeImage", authMiddleware, upload, authController.changeImage);


module.exports = router
