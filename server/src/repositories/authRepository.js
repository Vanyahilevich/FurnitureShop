const {ObjectId} =  require("mongodb");
const crypto = require("crypto");
const {nanoid} = require("nanoid");

const authRepository = {
  getUserByUserEmail: async (db, email) => {
    return db.collection("users").findOne({email})
  },
  getUserBySessionId: async (db, sessionId) => {
    const session = await db.collection("sessions").findOne({sessionId: sessionId})

    if (!session) {
      return
    }
    return db.collection("users").findOne({id:session.userId})
  },
  changeInfo: async(db, id, query) => {
    return await db.collection("users").updateOne(
      {
        id: id, 
      },
      { $set: query },
    );
  },
  changeImage: async(db, id,imageURL) => {
    return await db.collection("users").updateOne(
      {
        id: id, 
      },
      { $set: {"imageURL": imageURL} },
    );
  },
  createUser: async (db, { name, surname, email, password, imageURL},creationDateUser) => {
    const userId = nanoid();
    const hashedPassword = crypto.createHash('sha256').update(password).digest('hex');
  
    await db.collection("users").insertOne({
      id: userId,
      name,
      surname,
      email,
      password: hashedPassword,
      imageURL: imageURL ? imageURL : undefined,
      creationDateUser,
    });
  
    return userId; 
  },

  createSession: async (db, userId) => {
    const sessionId = nanoid()
    await db.collection("sessions").insertOne({
      userId,
      sessionId,
    })
    return sessionId
  },
  deleteSession: async (db, sessionId) => {
    await db.collection("sessions").deleteOne({sessionId})
  },
  
}
module.exports = authRepository
