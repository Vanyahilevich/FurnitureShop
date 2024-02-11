const authMiddleware = require("../middleware/authMiddleware.js");

const express = require('express');
const router = express.Router();
const deliveryController = require("../controllers/deliveryController.js")


router.get("/",  authMiddleware, deliveryController.getAllProductInDelivery)
router.post("/", authMiddleware, deliveryController.addProductToDelivery)
// router.put("/", authMiddleware, deliveryController.updateQuantityProductInDelivery)
router.delete("/", authMiddleware, deliveryController.deleteProductInDelivery)


module.exports = router
