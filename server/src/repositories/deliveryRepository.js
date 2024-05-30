const {ObjectId} = require("mongodb");

const deliveryRepository = {

  getAllProductsInDelivery: async (db, userId) => {
    const basket = await db.collection("delivery").findOne({userId: userId})
    return basket.items
  },
  createDelivery: async (db, userId) => {
    return await db.collection("delivery").insertOne({
      userId: userId,
      items: [],
    })
  },
  findProductInDelivery: async (db, userId, productId) => {
    return db.collection("delivery").findOne({
      userId: userId,
      'items': {
        $elemMatch: {
          productId: productId,
        }
      },
    })
  },
  
  addNewProductToDelivery: async (db, userId, productInfo) => {
    const { productId, quantity, creationDateMillis,deliveryDateMillis} = productInfo
    return await db.collection("delivery")
      .updateOne(
        {userId: userId},
        {
          $push: {
            items: {
              productId,
              quantity,
              creationDateMillis,
              deliveryDateMillis,
            }
          }
        }
      )
  },
  deleteProductInDelivery: async (db, userId, productId, creationDateMillis) => {
    await db.collection("delivery").updateOne(
      {userId: userId},
      {$pull: {"items": {"productId": (productId), "creationDateMillis": Number(creationDateMillis) }}}
    );
  }
}
module.exports = deliveryRepository
