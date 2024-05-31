const productsRepository = {
  dbName: "products",
  getAll: async (db, param) => {
    const query = {}
    if(param.category){
      query.category = param.category 
    }
    if(param.material){
      query.material = param.material 
    }
    if (param.search) {
      query.$or = [
        // {description: {$regex: param.search, $options: 'i'}},
        {name: {$regex: param.search, $options: 'i'}}
      ];
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
  checkValidityCount: async (db, productId, count) => {
    
    return await db.collection(productsRepository.dbName).findOne({
      id: productId,
      "quantity": {$gte: (count + 1)}
    })
  },
  deleteProduct: async (db, productId, quantity) => {
    return await db.collection(productsRepository.dbName).updateOne(
      {
        id: productId,
      }, {
        $inc: {"quantity": -quantity}
      }
    )
  },
  addProduct: async (db, productId, quantity) => {
    return await db.collection(productsRepository.dbName).updateOne(
      {
        id: productId,
      }, {
        $inc: {"quantity": quantity}
      }
    )
  }


}
module.exports = productsRepository
