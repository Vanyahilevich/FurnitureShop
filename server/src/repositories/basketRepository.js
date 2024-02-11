const {ObjectId} = require("mongodb");

const basketRepository = {

  getAllProductInBasket: async (db, userId) => {
    console.log("bdbasket")
    const basket = await db.collection("basket").findOne({user_id: new ObjectId(userId)})
    return basket.items
  },
  createBasket: async (db, id) => {
    return await db.collection("basket").insertOne({
      user_id: id,
      items: [],
      created_at: new Date(),
    })
  },
  findProductInBasket: async (db, id, size, user) => {
    console.log("findProductInBasket")

    return db.collection("basket").findOne({
      user_id: user._id,
      'items': {
        $elemMatch: {
          product_id: new ObjectId(id),
          size: size,
        }
      },
    })
  },
  addNewProductToBasket: async (db, newProduct, user) => {
    console.log("sadas")
    await db.collection("basket")
      .updateOne(
        {user_id: user._id},
        {$push: {items: newProduct}}
      )
  },
  updateExistProductToBasket: async (db, id, size, user, operation, count) => {
    console.log("updateExistProductToBasket")
    return await db.collection("basket").updateOne(
      {
        user_id: user._id,
        'items': {
          $elemMatch: {
            product_id: new ObjectId(id),
            size: size,
            quantity: operation === 1 ? {$lt: count} : {$gt: 1}
          }
        },
      },
      {$inc: {'items.$.quantity': operation === 1 ? 1 : -1}}
    );
  },

  deleteProductInBasket: async (db, user, productId, size) => {
    console.log("deleteProduct", productId)
    await db.collection("basket").updateOne(
      {user_id: user._id},
      {$pull: {"items": {"size": size, "product_id": new ObjectId(productId)}}}
    );
  }
}
module.exports = basketRepository
