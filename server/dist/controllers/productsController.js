"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const productRepository = require("../repositories/productRepository");
const productsController = {
    getAll: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const products = yield productRepository.getAll(req.db, req.query);
            res.json(products);
        }
        catch (error) {
            throw new Error(error.message);
        }
    }),
    getProductById: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const productId = req.params.id;
            const result = yield productRepository.getProductById(req.db, productId);
            res.json(result);
        }
        catch (error) {
            return new Error(error.message);
        }
    }),
    updateProducts: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        res.json({ mes: "sds" });
    })
    //   try {
    //     console.log("start")
    //     const productsInBasket = req.body
    //     console.log("productsInBasket", productsInBasket)
    //     const user = req.user
    //     const arrPromise = productsInBasket.map(product => {
    //       return new Promise(async (resolve, reject) => {
    //         const result = await productRepository.checkCountProduct(req.db, product._id)
    //         if (result) {
    //           resolve(result);
    //         } else {
    //           reject("error in sever");
    //         }
    //       })
    //     })
    // const result = await Promise.all(arrPromise)
    // const InfoProduct = []
    // result.forEach((origProduct, index) => {
    //   const basketProduct = productsInBasket[index]
    //   console.log("basketProduct",origProduct)
    //   console.log("==========", origProduct.size.filter(size => size.size === basketProduct.size)[0])
    //   if(origProduct.size.filter(size => size.size === basketProduct.size)[0].count >= basketProduct.count){
    //     console.log("+++++",origProduct._id,basketProduct.size,basketProduct.count)
    //     productRepository.updateCountInProduct(req.db, origProduct._id, basketProduct.size, basketProduct.count)
    //
    //
    //
    //   }else{
    //     console.log("error", origProduct)
    //     InfoProduct.push({
    //       _id: origProduct._id,
    //       size: origProduct.size.filter(size => size === basketProduct.size)[0]
    //     })
    //   }
    // })
    // const arrPromiseDecreaseProduct = products.map(product => {
    //   return new Promise(async (resolve, reject) => {
    //     const result = await productRepository.checkCountProduct(req.db, product._id)
    //     if (result) {
    //       resolve(result);
    //     } else {
    //       reject("error in sever");
    //     }
    //   })
    // })
    // console.log("INFOERROR", InfoProduct)
    // if(InfoProduct.length === 0){
    //   res.status(200).json({message: "all okey"})
    // }
    //   res.json({mess: "2ewq"})
    //   // console.log(result, products)
    //
    // } catch (error) {
    //   return new Error(error.message)
    // }
    // }
};
module.exports = productsController;
