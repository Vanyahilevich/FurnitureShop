const {ObjectId} = require("mongodb");
const productsRepository = {
  dbName: "products",
  getAll: async (db, param) => {
    const query = {}
    console.log("get all")
    if(param.category){
      query.category = param.category 
    }
    if(param.material){
      query.material = param.material 
    }
    let cursor = db.collection(productsRepository.dbName).find(query)

    const countDocuments = await cursor.count()
    let totalPages
    
    if (param.sort) {
      let sortChoose = {
        "Sort Ascending": 1,
        "Sort descending": -1,
      }
      cursor = cursor.sort({price: sortChoose[param.sort] || ""})
    }
    if (param.search) {
      query.$or = [
        // {description: {$regex: param.search, $options: 'i'}},
        {name: {$regex: param.search, $options: 'i'}}
      ];
    }
    if (param.page) {
      cursor = cursor.skip(+param.limit * (param.page - 1))
      totalPages = Math.ceil(countDocuments / param.limit)
    }
    if (param.limit) {
      cursor = cursor.limit(+param.limit)
    }
    return {
      products: await cursor.toArray(),
      totalPages: totalPages,
      foundProduct: countDocuments
    }
  },
  getProductById: async (db, id) => {
    return await db.collection(productsRepository.dbName).findOne({id})
  },
  getSimilarProductById: async (db, id) => {
    return await db.collection(productsRepository.dbName).find({id: {$ne: id}}).toArray()
  },
  checkValidityCount: async (db, id, size, count) => {
    return await db.collection(productsRepository.dbName).findOne({
      id: new ObjectId(id),
      "size": {$elemMatch: {size: size, count: {$gte: (count + 1)}}}
    },)
  },
  buyProduct: async (db, id, size, count) => {
    return await db.collection(productsRepository.dbName).updateOne(
      {
        id: new ObjectId(id),
        "size": {$elemMatch: {size: size, count: {$gte: count}}}
      }, {
        $inc: {"size.$.count": -count}
      }
    )
  },

}
module.exports = productsRepository
