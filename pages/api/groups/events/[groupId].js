import { MongoClient, ObjectId } from "mongodb";
export default async function handler(req, res) {
  const groupId = req.query.groupId;
  console.log("/api/groups/events/groupId: ", groupId);
  if (req.method === "GET") {
    const client = await MongoClient.connect(process.env.MONGO_URI);
    const db = client.db();
    const results = await db
      .collection("events")
      .find({ groupId: ObjectId(groupId) })
      .toArray();

    console.log("/api/groups/events/groupid: ", results);
    res.status(200).json({ events: results });
  }
}
