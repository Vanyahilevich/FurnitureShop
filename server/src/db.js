const {MongoClient, ObjectId} = require("mongodb")

const clientPromise = MongoClient.connect(process.env.DB_URI,
  {});

const connectDB = async (req, res, next) => {
  try {
    const client = await clientPromise;
    req.db = client.db("furniture")
    next()
  } catch (error) {
    next(error)
  }
}
module.exports = connectDB;
