const {validationResult} = require("express-validator");

const checkErrorValidateMiddleware = (req, res, next) => {
  console.log("checkError")
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log("errors", errors.array())
    return res.status(400).json({errors: errors.array()});
  } else {
    console.log("checkErrorValidate")
    next()
  }
}
module.exports = checkErrorValidateMiddleware
