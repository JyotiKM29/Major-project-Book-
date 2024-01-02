//next js router

import user from "../../models/usermodel";
// import connectDB from "@/middleware/mongoose";
import connectDb from "../../middleware/mongoose";

const handler = async (req, res) => {

  if (req.method === 'POST') {
    
    try {
      const _id = req.body._id;

      const existingUser = await user.findOne({ _id });
      // console.log(existingUser);
       if (existingUser.isAdmin===true) {
         let users = await user.find();
         res.status(200).json({ users });
       } else {
         res
           .status(404)
           .json({ msg: "this request doesn't exist", status: "error" });
         return;
       }
    } catch (error) {
     
      res.status(400).json({ msg: error.message, status: "error" });

    }
   
  } else {
    res.status(400).json({ msg: "this request does'nt allowed here" });
  }
};

export default connectDb(handler);
