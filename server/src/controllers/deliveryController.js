const {ObjectId} = require("mongodb");

const productRepository = require("../repositories/productRepository")
const basketRepository = require("../repositories/basketRepository")
const deliveryRepository = require("../repositories/deliveryRepository");


const deliveryController = {
  getAllProductInDelivery: async (req, res, next) => {
    try {
      const productsPointerInDelivery = await deliveryRepository.getAllProductsInDelivery(req.db, req.user._id)
      const count = productsPointerInDelivery.length
      console.log(productsPointerInDelivery)
      if (count === 0) {
        return res.status(200).json([])
      }

      const AllProductsInDelivery = await Promise.all(
        productsPointerInDelivery.map(item => {
          return new Promise(async (resolve, reject) => {
            try {
              const result = await productRepository.getProductById(req.db, item.productId)
              result.size = item.size
              result.count = item.count
              result.date = item.date
              if (result) {
                resolve(result);
              } else {
                reject('Ошибка выполнения операции');
              }
            } catch (error) {
              throw new Error(error)
            }
          });
        }))
      res.json({products: AllProductsInDelivery, count: count})
    } catch (error) {
      next(error)
    }
  },

  addProductToDelivery: async (req, res, next) => {
    try {
      const products = req.body
      const user = req.user
      const date = Date.now()
      await Promise.all(products.map(product => {
        return deliveryRepository.addNewProductToDelivery(req.db, user, product._id, product.size, product.count, date)
      }))
      res.status(200).json({message: "Good"})
    } catch (error) {
      next(error)
    }


  },

  deleteProductInDelivery: async (req, res, next) => {
    try {
      const product = req.body
      console.log("delete, prod", product)
      const user = req.user
      console.log("delete", req.body)
      await deliveryRepository.deleteProductInDelivery(req.db, user, product._id, product.size, product.date)
      res.status(200).json({})
    } catch (error) {
      next(error)
    }
  }


}

module.exports = deliveryController
