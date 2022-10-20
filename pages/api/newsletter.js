import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const userEmail = req.body.email;
    if (!userEmail || !userEmail.includes("@")) {
      res.status(422).json({ message: "Invalid email address." });
      return;
    }

    MongoClient.connect(
      "mongodb+srv://mongo:mongo@cluster0.s2j6qjb.mongodb.net/events?retryWrites=true&w=majority"
    )
      .then((client) => {
        const db = client.db();
        return db.collection("newsletter").insertOne({ email: userEmail });
      })
      .then(() => {
        res.status(201).json({ message: "Signed up!" });
        client.close();
      })
      .catch((error) => {
        console.log("error:", error);
        client.close();
      });
  }
};

export default handler;
