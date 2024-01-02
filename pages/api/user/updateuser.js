// pages/api/updateUser.js

import user from "../../../models/usermodel";
import connectDb from "../../../middleware/mongoose";

const handler = async (req, res) => {
  if (req.method === "PUT") {
    try {
      const { _id, ...updateFields } = req.body;

      // Check if the user exists
      const existingUser = await user.findById(_id);

      if (!existingUser) {
        return res.status(404).json({ error: "User not found" });
      }

      // Update the user fields
      const updatedUser = await user.findByIdAndUpdate(_id, updateFields, {
        new: true,
        runValidators: true,
      });

      res
        .status(200)
        .json({ success: "User data updated successfully", user: updatedUser });
    } catch (error) {
      console.error("Error updating user:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(404).json({ error: "This method is not allowed here" });
  }
};

export default connectDb(handler);
