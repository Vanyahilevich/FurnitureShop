const {ObjectId} = require("mongodb");
const productsRepository = {
  dbName: "furniture",
  getAll: async (db, param) => {
    const query = {}
    if (param.size) {
      query[`size`] = {
          $elemMatch: {
            size: param.size,
            count: {$gt: 0}
          }
      }
    }
    if (param.maxPrice) {
      query.price = {$gte: +param.minPrice, $lte: +param.maxPrice}
    }
    if (param.search) {
      query.$or = [
        {description: {$regex: param.search, $options: 'i'}},
        {title: {$regex: param.search, $options: 'i'}}
      ];
    }

    let maxPrice = await db.collection(productsRepository.dbName)
      .find({}).sort({ price: -1 }).limit(1).toArray();
      maxPrice = maxPrice[0].price
    let cursor = db.collection(productsRepository.dbName).find(query)

    const countDocuments = await cursor.count()
    let page
    if (param.sort) {
      cursor = cursor.sort({price: param.sort})
    }
    if (param.page) {
      cursor = cursor.skip(+param.limit * (param.page - 1))
      page = Math.ceil(countDocuments / param.limit)
    }
    if (param.limit) {
      cursor = cursor.limit(+param.limit)
    }
    return {
      products: await cursor.toArray(),
      page: page,
      maxPrice: maxPrice,
      foundProduct: countDocuments
    }
  },
  getProductById: async (db, id) => {
    return await db.collection(productsRepository.dbName).findOne({_id: new ObjectId(id)})
  },
  getSimilarProductById: async (db, id) => {
    return await db.collection(productsRepository.dbName).find({_id: {$ne: new ObjectId(id)}}).toArray()
  },
  checkValidityCount: async (db, id, size, count) => {
    return await db.collection(productsRepository.dbName).findOne({
      _id: new ObjectId(id),
      "size": {$elemMatch: {size: size, count: {$gte: (count + 1)}}}
    },)
  },
  buyProduct: async (db, id, size, count) => {
    return await db.collection(productsRepository.dbName).updateOne(
      {
        _id: new ObjectId(id),
        "size": {$elemMatch: {size: size, count: {$gte: count}}}
      }, {
        $inc: {"size.$.count": -count}
      }
    )
  },

}
module.exports = productsRepository
