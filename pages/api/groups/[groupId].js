import { MongoClient, ObjectId } from "mongodb";

export default async function handler(req, res) {
  const groupId = req.query.groupId;
  console.log("/api.groups/groupId: ", groupId);
  if (req.method === "GET") {
    const client = await MongoClient.connect(process.env.MONGO_URI);
    const db = client.db();
    const results = await db
      .collection("groups")
      .find({ _id: ObjectId(groupId) })
      .toArray();
    console.log("/api/groups/[groupId] hostId: ", results.hostId);

    res.status(201).json({ group: results });
  }
}
