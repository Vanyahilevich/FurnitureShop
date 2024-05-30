const authMiddleware = require("../middleware/authMiddleware.js");

const express = require('express');
const router = express.Router();
const deliveryController = require("../controllers/deliveryController.js")


router.get("/",  authMiddleware, deliveryController.getProductsFromDelivery)
// router.post("/", authMiddleware, deliveryController.addProductsToDelivery)
router.post("/confirm/:id", authMiddleware, deliveryController.confirmDelivery)

router.delete("/:id/:creationDateMillis", authMiddleware, deliveryController.deleteProductFromDelivery)


module.exports = router
