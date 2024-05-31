const {ObjectId} = require("mongodb");

const productsRepository = require("../repositories/productsRepository")
const deliveryRepository = require("../repositories/deliveryRepository");


const deliveryController = {
  getProductsFromDelivery: async (req, res, next) => {
    const user = req.user
    try {
      const productsPointerInDelivery = await deliveryRepository.getAllProductsInDelivery(req.db, user.id);
      const count = productsPointerInDelivery.length;
      if (count === 0) {
        return res.json([]);
      }
  
      const allProductsInDelivery = await Promise.all(
        productsPointerInDelivery.map(async (item) => {
          try {
            const result = await productsRepository.getProductById(req.db, item.productId);
            result.quantity = item.quantity;
            result.creationDateMillis = item.creationDateMillis
            result.deliveryDateMillis = item.deliveryDateMillis
            return result;
          } catch (error) {
            throw new Error(error);
          }
        })
      );
  
      res.json(allProductsInDelivery );
    } catch (error) {
      next(error);
    }
  },


  addProductsToDelivery: async (req, res, next) => {
    // try {
    //   const products = req.body
    //   const user = req.user
    //   const creationDate = Date.now()
    //   await Promise.all(products.map(product => {
    //     return deliveryRepository.addNewProductToDelivery(req.db, user.id, product.id, product.quantity, creationDate)
    //   }))
    //   res.status(200).json({message: "Good"})
    // } catch (error) {
    //   next(error)
    // }
  },

  deleteProductFromDelivery: async (req, res, next) => {    
    try {
      const {id:productId, creationDateMillis} = req.params
      const {quantity} = req.body
      const user = req.user
      await deliveryRepository.deleteProductInDelivery(req.db, user.id, productId, creationDateMillis)
      await productsRepository.addProduct(req.db,productId, quantity)
      res.status(200).json({})
    } catch (error) {
      next(error)
    }
  },
  confirmDelivery: async (req, res, next) => {
    try {
      const user = req.user
      const {id:productId} = req.params
      const {creationDateMillis, quantity} = req.body
      await deliveryRepository.deleteProductInDelivery(req.db, user.id, productId, creationDateMillis)
      await productsRepository.deleteProduct(req.db, productId, quantity)
      res.status(200).json({})
    } catch (error) {
      next(error)
    }
  },




}

module.exports = deliveryController
