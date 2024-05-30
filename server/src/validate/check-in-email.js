const {body} = require("express-validator");

const checkInEmail = () => {
  return [
    body("email").isEmail(),
  ]
}
module.exports = checkInEmail
