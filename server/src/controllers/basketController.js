const basketRepository = require("../repositories/basketRepository");
const deliveryRepository = require('../repositories/deliveryRepository')
const productsRepository = require('../repositories/productsRepository')
const { addDays } = require("date-fns");
const getRandomNumber =  require('../utils/get-random-number');

const basketController = {
  getAllProductInBasket: async (req, res, next) => {
    try {
      const user = req.user;
      const linkOnAllProduct = await basketRepository.getAllProductInBasket(req.db, user.id);
  
      if (linkOnAllProduct.length === 0) {
        return res.status(200).json([]);
      }
  
      const allProductsInBasket = await Promise.all(
        linkOnAllProduct.map(async (item) => {
          try {
            const result = await productsRepository.getProductById(req.db, item.productId);
            return {
              ...result,
              quantity: item.quantity,
            };
          } catch (error) {
            console.error("Error fetching product:", error);
            
            return {
              id: item.productId,
              name: "Product Not Found",
              quantity: item.quantity,
            };
          }
        })
      );
  
      res.json(allProductsInBasket);
    } catch (error) {
      next(error)
    }
  },
  addProductToBasket: async (req, res, next) => {
    try {
      const {id} = req.params
      const {quantity} = req.body
      const user = req.user
      if(quantity <= 0){
        return res.status(400).json({message: "This product SOLD OUT"})
      }
      const productInBasket = await basketRepository.findProductInBasket(req.db, id, user.id)

      if (!productInBasket) {
        const newProduct = {
          productId: id,
          quantity: 1,
        }

        await basketRepository.addNewProductToBasket(req.db, newProduct, user.id)
        return res.status(201).json(newProduct)
      } else {
        res.status(400).json({message: "Product already in basket", id:id})
      }
    } catch (error) {
      next(error)
    }
  },
  increaseQuantityProductInBasket: async (req, res, next) => {
    console.log("increase")
    try {
      const {id:productId} = req.params
      const {quantity} = req.body
      const user = req.user

      const changingProduct = await productsRepository.getProductById(req.db, productId)
      const quantityChangingProduct = changingProduct.quantity

      if (quantity > quantityChangingProduct ) {
        return res.status(400).json({error: "There is no such quantity in stock"})
      }

      await basketRepository.increaseProductInBasket(req.db, user.id, productId)
      res.status(200).json({message: "good"})
    } catch (error) {
      next(error)
    }
  },
  decreaseQuantityProductInBasket: async (req, res, next) => {
    console.log("decrease")
    try {
      const {id:productId} = req.params
      const {quantity} = req.body
      const user = req.user
      console.log("decrease",quantity)
      if(quantity < 1){
        return res.status(400).json({error: "00"})
      }
      await basketRepository.decreaseProductInBasket(req.db, user.id, productId)
        
      res.status(200).json({message: "good"})
    } catch (error) {
      next(error)
    }
  },
  deleteProductFromBasket: async (req, res, next) => {
    try {
      const {id:productId} = req.params
      const user = req.user
      await basketRepository.deleteProductFromBasket(req.db, user.id, productId)
      res.status(200).json({message: "Product deleted"})
    } catch (error) {
      next(error)
    }
  },
  deleteAllProductFromBasket: async (req, res, next) => {
    try {
      const user = req.user
      await basketRepository.deleteAllProductFromBasket(req.db, user.id)
      res.status(200).json({message: "All product deleted"})
    } catch (error) {
      next(error)
    }
  },
  purchaseProducts: async (req, res, next) => {
    try {
      const user = req.user
      const products = req.body
      
      const creationDate = new Date()
      const deliveryDate = addDays(creationDate, getRandomNumber(4, 14))
      const creationDateMillis = creationDate.getTime()
      const deliveryDateMillis = deliveryDate.getTime()
      
      await Promise.all(products.map(product => {
        const productInfo = {
          "productId": product.id,
          "quantity": product.quantity,
          "creationDateMillis": creationDateMillis,
          "deliveryDateMillis": deliveryDateMillis,
        }
        return deliveryRepository.addNewProductToDelivery(req.db, user.id, productInfo)
      }))
      await basketRepository.deleteAllProductFromBasket(req.db, user.id)
      res.status(200).json({message: "Good"})
    } catch (error) {
      next(error)
    }
  }

}

module.exports = basketController
