const {ObjectId} = require("mongodb");
const productRepository = require("../repositories/productRepository")
const basketRepository = require("../repositories/basketRepository");


const basketController = {
  getAllProductInBasket: async (req, res, next) => {
    try {
      const productsPointerInBasket = await basketRepository.getAllProductInBasket(req.db, req.user.id)
      if (productsPointerInBasket.length === 0) {
        return res.status(200).json([])
      }
      const AllProductsInBasket = await Promise.all(
        productsPointerInBasket.map(item => {
          return new Promise(async (resolve, reject) => {
            try {
              const result = await productRepository.getProductById(req.db, item.product_id)
              result.size = item.size
              result.count = item.quantity
              if (result) {
                resolve(result);
              } else {
                reject('Ошибка выполнения операции');
              }
            } catch (error) {
              throw new Error()
            }
          });
        }))
      res.json( AllProductsInBasket)


    } catch (error) {
      next(error)
    }
  },
  addProductToBasket: async (req, res, next) => {
    console.log("addProductToBasket")
    try {
      const {_id, size} = req.body
      const user = req.user
      console.log("productInBasket", user)

      const productInBasket = await basketRepository.findProductInBasket(req.db, _id, size, user)
      console.log("productInBasket",productInBasket)

      if (!productInBasket) {
        const newProduct = {
          product_id: new ObjectId(_id),
          quantity: 1,
          size: size
        }
        await basketRepository.addNewProductToBasket(req.db, newProduct, user)
        return res.status(201).json(newProduct)
      } else {
        res.status(201).json({message: "Product in basket"})
      }
    } catch (error) {
      next(error)
    }
  },
  updateQuantityProductInBasket: async (req, res, next) => {
    try {
      const {id, operation, size, count} = req.body
      console.log("update")
      if (operation === 1) {
        const result = await productRepository.checkValidityCount(req.db, id, size, count)
        if (result === null) {
          return res.json({error: "Такого количества нету на складе"})
        }
        const realCount = result.size.filter(sizes => sizes.size === size)[0].count
        await basketRepository.updateExistProductToBasket(req.db, id, size, req.user, operation, realCount)
      } else {
        await basketRepository.updateExistProductToBasket(req.db, id, size, req.user, operation, count)
      }
      res.sendStatus(200)
    } catch (error) {
      next(error)
    }
  },
  deleteProductInBasket: async (req, res, next) => {
    try {
      const products = req.body
      const user = req.user
      console.log("products", products)
      await Promise.all(products.map(product => {
        return basketRepository.deleteProductInBasket(req.db, user, product._id, product.size)
      }))
      res.status(200).json({})
    } catch (error) {
      next(error)
    }
  }
}

module.exports = basketController
