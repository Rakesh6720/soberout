import { MongoClient, ObjectId } from "mongodb";

export default async function handler(req, res) {
  const client = await MongoClient.connect(process.env.MONGO_URI);
  const db = client.db();
  const userId = req.query.userId;

  const user = await db.collection("users").findOne({ _id: ObjectId(userId) });
  console.log("/api/users/userId user: ", user);

  res.status(201).json({ user: user });
}
