//next js router

import user from "../../models/usermodel";
// import connectDB from "@/middleware/mongoose";
import connectDb from "../../middleware/mongoose";

const handler = async (req, res) => {
  let users = await user.find();
  console.log();
  res.status(200).json({ users });
};

export default connectDb(handler);
