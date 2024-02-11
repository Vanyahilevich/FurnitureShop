"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const authMiddleware_js_1 = __importDefault(require("../middleware/authMiddleware.js"));
const express = require('express');
const router = express.Router();
const basketController = require("../controllers/basketController.js");
router.get("/", authMiddleware_js_1.default, basketController.getAllProductInBasket);
router.post("/", authMiddleware_js_1.default, basketController.addProductToBasket);
router.put("/", authMiddleware_js_1.default, basketController.updateQuantityProductInBasket);
router.delete("/", authMiddleware_js_1.default, basketController.deleteProductInBasket);
module.exports = router;
