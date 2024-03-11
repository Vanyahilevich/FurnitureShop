const authMiddleware = require("../middleware/authMiddleware.js");

const express = require('express');
const router = express.Router();
const basketController = require("../controllers/basketController.js")


router.get("/",  authMiddleware, basketController.getAllProductInBasket)

router.post("/purchase", authMiddleware, basketController.purchaseProducts)


router.post("/:id", authMiddleware, basketController.addProductToBasket)

// router.put("/:id", authMiddleware, basketController.updateQuantityProductInBasket)
router.put("/increase/:id", authMiddleware, basketController.increaseQuantityProductInBasket)
router.put("/decrease/:id", authMiddleware, basketController.decreaseQuantityProductInBasket)


router.delete("/:id", authMiddleware, basketController.deleteProductFromBasket)
router.delete("/", authMiddleware, basketController.deleteAllProductFromBasket)


module.exports = router
