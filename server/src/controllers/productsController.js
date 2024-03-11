const productsRepository = require("../repositories/productsRepository")
const basketRepository = require("../repositories/basketRepository");


const productsController = {
  getAll: async (req, res, next) => {
    try {
      const data = await productsRepository.getAll(req.db, req.query);
      res.json(data)
    } catch (error) {
      console.error("Проблема с БД: GetALL")
      next(error)
    }
  },
  getProductById: async (req, res, next) => {
    try {
      const {id} = req.params
      const result = await productsRepository.getProductById(req.db, id)
      res.json(result)
    } catch (error) {
      console.error("Проблема с БД: getProductById")
      next(error)
    }
  },
  getSimilarProductById: async (req, res, next) => {
    try {
      const {id} = req.params;
      const result = await productsRepository.getSimilarProductById(req.db, id)
      res.json(result)

    } catch (error) {
      console.error("Проблема с БД: getSimilarProductById")
      next(error)
    }
  },
}
module.exports = productsController
