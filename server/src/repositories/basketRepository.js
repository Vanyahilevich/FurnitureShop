const {ObjectId} = require("mongodb");

const basketRepository = {

  getAllProductInBasket: async (db, userId) => {
    const basket = await db.collection("basket").findOne({userId: userId})
    return basket.items
  },
  createBasket: async (db, id) => {
    return await db.collection("basket").insertOne({
      userId: id,
      items: [],
      created_at: new Date(),
    })
  },
  findProductInBasket: async (db, id, userId) => {
    console.log("findProductInBasket")

    return db.collection("basket").findOne({
      userId: userId,
      'items': {
        $elemMatch: {
          productId: id, 
        }
      },
    })
  },
  addNewProductToBasket: async (db, newProduct, userId) => {
    await db.collection("basket")
      .updateOne(
        {userId: userId},
        {$push: {items: newProduct}}
      )
  },
  increaseProductInBasket: async (db, userId, productId) => {
    return await db.collection("basket").updateOne(
      {
        userId: userId,
        'items': {
          $elemMatch: {
            productId: productId,
          }
        },
      },
      {$inc: {'items.$.quantity': 1 }}
    );
  },
  decreaseProductInBasket: async (db, userId, productId) => {
    return await db.collection("basket").updateOne(
      {
        userId: userId,
        'items': {
          $elemMatch: {
            productId: productId,
          }
        },
      },
      {$inc: {'items.$.quantity': -1}}
    );
  },

  deleteProductFromBasket: async (db, userId, productId,) => {
    await db.collection("basket").updateOne(
      {userId: userId},
      {$pull: {"items": { "productId": productId}}}
    );
  },
  deleteAllProductFromBasket: async (db, userId) => {
    await db.collection("basket").updateOne(
      {userId: userId},
      {$set: {"items": []}}
    );
  },
}
module.exports = basketRepository
