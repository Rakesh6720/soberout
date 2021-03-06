import { hashPassword } from "../../../lib/auth";
import { connectToDatabase } from "../../../lib/db";

export default async function handler(req, res) {
  let db;
  let client;

  if (req.method === "POST") {
    client = await connectToDatabase();
    db = client.db();

    const { email, password } = req.body;

    const existingUser = await db.collection("users").findOne({ email: email });

    if (existingUser) {
      res.status(422).json({ message: "User exists already" });
      client.close();
      return;
    }

    const hashedPassword = await hashPassword(password);

    const result = await db.collection("users").insertOne({
      email: email,
      password: hashedPassword,
    });

    client.close();

    res.status(201).json({ message: "User successfully added to db", result });
  }
}
