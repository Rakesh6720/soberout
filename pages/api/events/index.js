import { MongoClient } from "mongodb";
export default async function handler(req, res) {
  const client = await MongoClient.connect(process.env.MONGO_URI);

  if (req.method === "GET") {
    const db = client.db();
    const events = await db.collection("events").find().toArray();

    res.status(200).json({ events: events });
  }
}
