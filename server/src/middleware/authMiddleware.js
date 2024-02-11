const authRepository = require("../repositories/authRepository")
const jwt = require('jsonwebtoken')
module.exports = async (req, res, next) => {
  console.log("authMiddleware")
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


    // const token = req.headers.authorization.split(" ")[1]
    // if(!token){
    //   return res.status(401).json({message: "Не авторизован"})
    // }
    // const decoded = jwt.verify(token, process.env.SECRET_KEY)
    // req.user = decoded
    // next()
  } catch (error) {
    next(error);
  }
}
