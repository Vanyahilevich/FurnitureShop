const {body} = require("express-validator");


const signInValidationRules = () => {
  return [
    body("email").isEmail(),
    body("password").isString().isLength({min: 2, max: 50}),
  ]
}
module.exports = signInValidationRules
