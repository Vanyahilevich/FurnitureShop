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
        return res.status(400).json({message: "Email or Password enter wrote"});
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
  changeInfo: async (req, res) => {
      const user  = req.user
      const userInfo = req.body
      const query = {}
    if(userInfo.name){
      query.name = userInfo.name
    }
    if(userInfo.surname){
      query.surname = userInfo.surname
    }
    console.log("query", query)
   
    res.json({ message: 'Info changed successfully'});  
  },
  changeEmail: async (req, res) => {
    const user  = req.user
    const userInfo = req.body
    const result = await authRepository.getUserByUserEmail(req.db, userInfo.email)
    if (!!result) {
      return res.status(400).json({message: 'User with this email already exists.'});
    }
    const query = {
      "email" : userInfo.email
    }
    await authRepository.changeInfo(req.db,user.id,query)
    const sessionId = await authRepository.createSession(req.db, user.id)
      res.cookie("sessionId", sessionId, {
        httpOnly: true,
        expires: new Date(Date.now() + 3600000 * 24),
        sameSite: 'Lax',
        domain: 'localhost',  
      })
        .status(200)
        .json({ message: 'Email changed successfully'});
},
  changeImage: async (req, res) => {
      const user  = req.user
      let imagePath = null
      if(req.file){
        imagePath = "user-avatars/" + req.file.filename
      }

      authRepository.changeImage(req.db, user.id, imagePath)
      res.json({ message: 'Image uploaded successfully' });  
  }
}
module.exports = authController
