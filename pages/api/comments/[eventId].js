import {
  connectDatabase,
  getAllDocuments,
  insertDocument,
} from "../../../helpers/db-util";
const handler = async (req, res) => {
  const eventId = req.query.eventId;

  let client;

  try {
    client = await connectDatabase();
  } catch (error) {
    res.status(500).json({ message: "Connection to database failed." });
    return;
  }

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

    let result;
    try {
      result = await insertDocument(client, "comments", newComment);
      newComment._id = result.insertedId;
      res.status(201).json({ message: "Added comment." });
    } catch (error) {
      res.status(500).json("Failed inserting documents.");
    }
  }

  if (req.method === "GET") {
    try {
      const comments = await getAllDocuments(client, "comments", { _id: -1 });
      res.status(200).json({ comments });
    } catch (error) {
      res.status(500).json({ message: "Failed retrieving documents." });
    }
  }
  client.close();
};

export default handler;
