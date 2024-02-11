const {ObjectId} = require("mongodb");

const deliveryRepository = {

  getAllProductsInDelivery: async (db, userId) => {
    const basket = await db.collection("delivery").findOne({user_id: new ObjectId(userId)})
    return basket.items
  },
  createDelivery: async (db, id) => {
    return await db.collection("delivery").insertOne({
      user_id: id,
      items: [],
      created_at: new Date(),
    })
  },
  findProductInDelivery: async (db, id, size, user) => {
    return db.collection("delivery").findOne({
      user_id: user._id,
      'items': {
        $elemMatch: {
          product_id: new ObjectId(id),
          size: size,
        }
      },
    })
  },
  addNewProductToDelivery: async (db, user, productId, size, count, date) => {
    return await db.collection("delivery")
      .updateOne(
        {user_id: user._id},
        {
          $push: {
            items: {
              productId,
              size,
              count,
              date,
            }
          }
        }
      )
  },
  updateExistProductToDelivery: async (db, id, size, user, operation, count) => {
    if (operation === 1) {
      return await db.collection("delivery").updateOne(
        {
          user_id: user._id,
          'items': {
            $elemMatch: {
              product_id: new ObjectId(id),
              size: size,
              quantity: {$lt: count}
              // count: {$gte: count - 1}
            }
          },
        },
        {$inc: {'items.$.quantity': 1}}
      );
    } else {
      return await db.collection("delivery").updateOne(
        {
          user_id: user._id,
          'items': {
            $elemMatch: {
              product_id: new ObjectId(id),
              size: size,
              quantity: {$gt: 1}
            }
          },
        },
        {$inc: {'items.$.quantity': -1}}
      );
    }

  },

  deleteProductInDelivery: async (db, user, productId, size, date) => {
    await db.collection("delivery").updateOne(
      {user_id: user._id},
      {$pull: {"items": {"size": size, "productId": (productId), "date": date }}}
    );
  }

}
module.exports = deliveryRepository
