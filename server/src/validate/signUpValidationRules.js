const {body} = require("express-validator");

const signUpValidationRules = () => {
  console.log("validateRules")
  return [
    body("id").isString(),
    body("email").isEmail(),
    body("password").isString().isLength({min: 2, max: 50}),
    body("name").isString().isLength({min: 2, max: 50}),
    body("surname").isString().isLength({min: 2, max: 50}),
  ]
}
module.exports = signUpValidationRules
