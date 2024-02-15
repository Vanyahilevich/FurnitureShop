const authMiddleware = require("../middleware/authMiddleware.js");

const express = require('express');
const router = express.Router();
const basketController = require("../controllers/basketController.js")


router.get("/",  authMiddleware, basketController.getAllProductInBasket)
router.post("/:id", authMiddleware, basketController.addProductToBasket)
router.put("/:id", authMiddleware, basketController.updateQuantityProductInBasket)
router.delete("/:id", authMiddleware, basketController.deleteProductInBasket)


module.exports = router
