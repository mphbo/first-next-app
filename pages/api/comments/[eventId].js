import { MongoClient } from "mongodb";
const handler = async (req, res) => {
  const eventId = req.query.eventId;

  const client = await MongoClient.connect(
    "mongodb+srv://mongo:mongo@cluster0.s2j6qjb.mongodb.net/events?retryWrites=true&w=majority"
  );

  if (req.method === "POST") {
    const { email, name, text } = req.body;
    if (
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !text ||
      text.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input." });
      return;
    }
    const newComment = {
      email,
      name,
      text,
      eventId,
    };
    console.log(newComment);

    const db = client.db();
    const result = await db.collection("comments").insertOne(newComment);
    console.log("result:", result);

    res.status(201).json({ message: "Added comment." });
  }

  if (req.method === "GET") {
    const dummyList = [
      { id: "c1", name: "Max", text: "this is a comment" },
      { id: "c2", name: "Sam", text: "this is a second comment" },
      { id: "c3", name: "Frodo", text: "this is a third comment" },
    ];

    res.status(200).json({ comments: dummyList });
  }
  client.close();
};

export default handler;
