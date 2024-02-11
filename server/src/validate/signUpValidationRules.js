const {body} = require("express-validator");

const signUpValidationRules = () => {
  console.log("validateRules")
  return [
    body("email").isEmail(),
    body("password").isString().isLength({min: 2, max: 50}),
    body("username").isString().isLength({min: 2, max: 50}),
    body("surname").isString().isLength({min: 2, max: 50}),
  ]
}
module.exports = signUpValidationRules
