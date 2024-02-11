const crypto = require("crypto");
const authRepository = require('../repositories/authRepository')
const basketRepository = require('../repositories/basketRepository')
const deliveryRepository = require("../repositories/deliveryRepository");

const authController = {
  signUp: async (req, res, next) => {

    const user = req.body;
    // console.log(req.db)
    try {
      const result = await authRepository.getUserByUserEmail(req.db, user.email)
      if (!!result) {
        const error = new Error('User with this email already exists.');
        error.status = 400;
        res.status(error.status).json({error: error.message});
        return
      }
      const createdIdUser = await authRepository.createUser(req.db, user)
      await basketRepository.createBasket(req.db, createdIdUser)
      await deliveryRepository.createDelivery(req.db, createdIdUser)
      res.status(201).json(createdIdUser);
    } catch (error) {
      next(error)
    }
  },
  signIn: async (req, res, next) => {
    const {email, password} = req.body

    try {
      const user = await authRepository.getUserByUserEmail(req.db, email)

      if (!user || user.password !== crypto.createHash('sha256').update(password).digest('hex')) {
        const error = new Error('Wrote email or password');
        error.status = 400;
        return res.status(error.status).json({error: error.message});
      }
      const sessionId = await authRepository.createSession(req.db, user._id)
      console.log("sessionId", sessionId)
      res.cookie("sessionId", sessionId, {
        httpOnly: true,
        expires: new Date(Date.now() + 3600000 * 24),
        sameSite: 'Lax',
        domain: 'localhost',  // Замените на фактический домен
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
        return res.json({message: "нету такого пользователя"})
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
  }
}
module.exports = authController
