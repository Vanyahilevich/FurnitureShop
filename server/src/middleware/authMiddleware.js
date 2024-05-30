const authRepository = require("../repositories/authRepository")
const jwt = require('jsonwebtoken')
module.exports = async (req, res, next) => {
  try {
    if (!req.cookies['sessionId']) {
      console.log("The user is not logged in")
      return res.status(401).json({message: "The user is not logged in"});
    }
    const user = await authRepository.getUserBySessionId(req.db, req.cookies['sessionId']);
    if (!user) {
      console.log('User not found')
      return res.status(401).json({message: 'User not found'});
    }
    req.user = user;
    req.sessionId = req.cookies['sessionId'];
    return next();

  } catch (error) {
    next(error);
  }
}
