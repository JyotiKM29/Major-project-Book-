// next js router
import user from "../../../models/usermodel"; // Adjust the path accordingly
import connectDb from "../../../middleware/mongoose";

const handler = async (req, res) => {
  try {
    await connectDb(); // Ensure that this properly connects to the database

    if (req.method === "POST") {
      const { _id } = req.body;

      // Use findById without an object for simpler usage
      let client = await user.find({ _id });

      if (client) {
        res.status(200).json({ client });
      } else {
        res.status(400).json({ msg: "User not found" });
      }
    } else {
      res.status(404).json({ error: "This method is not allowed here" });
    }
  } catch (error) {
    console.error("Error in the handler:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default handler;
