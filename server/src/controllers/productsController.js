const productRepository = require("../repositories/productRepository")
const basketRepository = require("../repositories/basketRepository");


const productsController = {
  getAll: async (req, res, next) => {
    try {
      const data = await productRepository.getAll(req.db, req.query);
      res.json(data)
    } catch (error) {
      console.error("Проблема с БД: GetALL")
      next(error)
    }
  },

  getProductById: async (req, res, next) => {
    try {
      const {id} = req.params
      console.log(id)
      const result = await productRepository.getProductById(req.db, id)
      res.json(result)
    } catch (error) {
      console.error("Проблема с БД: getProductById")
      next(error)
    }
  },
  getSimilarProductById: async (req, res, next) => {
    try {
      const {id} = req.params;
      const result = await productRepository.getSimilarProductById(req.db, id)
      res.json(result)

    } catch (error) {
      console.error("Проблема с БД: getSimilarProductById")
      next(error)
    }
  },
  updateProducts: async (req, res, next) => {
    try {
      const productsInBasket = req.body;
      await Promise.all(productsInBasket.map(async (product) => {
        try {
          await productRepository.buyProduct(req.db, product.id, product.size, product.count);
          await basketRepository.deleteProductInBasket(req.db, req.user, product.id, product.size);
        } catch (error) {
          console.error("Ошибка при обновлении продукта: updateProducts");
          throw new Error();
        }
      }))
    } catch (error) {
      console.error("Проблема с БД: updateProducts");
      return next(error);
    }

    // res.json({message: "sds"});
  }
}
module.exports = productsController
