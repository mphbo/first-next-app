const handler = (req, res) => {
  const eventId = req.query.eventId;

  if (req.body === "POST") {
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
      id: new Date().toISOString(),
      email,
      name,
      text,
    };
    console.log(newComment);
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
};

export default handler;
