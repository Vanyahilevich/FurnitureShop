const authMiddleware = require("../middleware/authMiddleware.js");

const express = require('express');
const router = express.Router();

const productsController = require("../controllers/productsController.js")


router.get("/", productsController.getAll)
router.get("/:id", productsController.getProductById)
router.get("/similar/:id", productsController.getSimilarProductById)
router.put("/updateProducts",authMiddleware, productsController.updateProducts)


module.exports = router
