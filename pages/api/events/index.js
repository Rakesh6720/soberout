import { MongoClient } from "mongodb";
export default async function handler(req, res) {
  const client = await MongoClient.connect(
    "mongodb+srv://Rakesh6720:MongoGopackers1@cluster1.o2bm8.mongodb.net/soberout?retryWrites=true&w=majority"
  );

  if (req.method === "GET") {
    const db = client.db();
    const events = await db.collection("events").find().toArray();

    res.status(200).json({ events: events });
  }
}
