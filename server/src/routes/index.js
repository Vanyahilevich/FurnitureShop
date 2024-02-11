const express = require('express');
const router = express.Router();

const productsRouter = require("./productsRouter")
const authRouter = require("./authRouter.js")
const basketRouter = require("./basketRouter.js")
const deliveryRouter = require("./deliveryRouter.js")


router.use("/auth", authRouter);
router.use("/products", productsRouter)
router.use("/basket", basketRouter)
router.use("/delivery", deliveryRouter)


module.exports = router
