const crypto = require("crypto");
const authRepository = require('../repositories/authRepository')
const basketRepository = require('../repositories/basketRepository')
const deliveryRepository = require("../repositories/deliveryRepository");
const path = require('path');

const authController = {
  signUp: async (req, res, next) => {

    const user = req.body;
    console.log('user', user)
    const creationDateUser = Date.now()
    try {
      const result = await authRepository.getUserByUserEmail(req.db, user.email)
      if (!!result) {
        const error = new Error('User with this email already exists.');
        error.status = 400;
        res.status(error.status).json({message: error.message});
        return
      }
      const userId = await authRepository.createUser(req.db, user, creationDateUser)
      await basketRepository.createBasket(req.db, userId)
      await deliveryRepository.createDelivery(req.db, userId)
      res.status(201).json(userId);
    } catch (error) {
      next(error)
    }
  },
  login: async (req, res, next) => {
    const {email, password} = req.body

    try {
      const user = await authRepository.getUserByUserEmail(req.db, email)

      if (!user || user.password !== crypto.createHash('sha256').update(password).digest('hex')) {
        const error = new Error('Wrote email or password');
        error.status = 400;
        return res.status(error.status).json({error: error.message});
      }
      const sessionId = await authRepository.createSession(req.db, user.id)
      res.cookie("sessionId", sessionId, {
        httpOnly: true,
        expires: new Date(Date.now() + 3600000 * 24),
        sameSite: 'Lax',
        domain: 'localhost',  
      })
        .status(200)
        .json(user);
    } catch (error) {
      next(error)
    }

  },
  auth: async (req, res, next) => {
    try {
      const user = await authRepository.getUserBySessionId(req.db, req.cookies['sessionId'])
      if (!user) {
        return res.status(401).json({message: "Unauthorized"})
      }
      req.user = user;
      req.sessionId = req.cookies['sessionId'];
      res.status(200).json(user)
    } catch (error) {
      next(error)
    }

  },

  logOut: async (req, res) => {
    if (!req.user) {
      return res.redirect('/')
    }
    await authRepository.deleteSession(req.db, req.sessionId)
    res.clearCookie("sessionId").json({message: "delete cookie"})
  },
  upload: async (req, res) => {
    console.log("start")
      const user  = req.user
      console.log("req.body", req.body)
      console.log("req.file", req.file)
      const userInfo = req.body
      // if (!req.file) {
      //   return res.status(400).json({ message: 'No file uploaded' });
      // }
      // console.log("req.file", req.file)
      let imagePath = null
      if(req.file){
        imagePath = "user-avatars/" + req.file.filename
      }

      // const imagePath = path.join('uploads/user-avatar', req.file.filename);
      // console.log(imagePath)
      authRepository.changeUserInfo(req.db,user.id,userInfo,imagePath)
      res.json({ message: 'Image uploaded successfully', imagePath });
  
  }
}
module.exports = authController
