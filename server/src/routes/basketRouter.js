const authMiddleware = require("../middleware/authMiddleware.js");

const express = require('express');
const router = express.Router();
const basketController = require("../controllers/basketController.js")


router.get("/",  authMiddleware, basketController.getAllProductInBasket)
router.post("/", authMiddleware, basketController.addProductToBasket)
router.put("/", authMiddleware, basketController.updateQuantityProductInBasket)
router.delete("/", authMiddleware, basketController.deleteProductInBasket)


module.exports = router
