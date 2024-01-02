import user from "../../models/usermodel";
import connectDB from "@/middleware/mongoose";
import jwt from "jsonwebtoken";

const handler = async (req, res) => {
  if (req.method === "POST") {
    try {
      const { resetToken, newPassword, confirmPassword } = req.body;

      if (!resetToken) {
        return res.status(400).json({ msg: "Reset token is not valid" });
      }

      const existingUser = await user.findOne({ resetToken });

      if (!existingUser) {
        return res.status(400).json({ msg: "Reset token is not valid" });
      }

      if (existingUser.resetTokenExpiresAt < Date()) {
        return res
          .status(400)
          .json({
            msg: "Reset token expired. Please create another token again.",
          });
      }

      if (newPassword !== confirmPassword) {
        return res
          .status(404)
          .json({ msg: "Confirm password and password are not matching" });
      }

      // Update the user's password and reset token expiration time
      existingUser.password = newPassword;
      existingUser.resetTokenExpiresAt = new Date();
      const result = await existingUser.save();

      return res
        .status(200)
        .json({
          user: result,
          msg: "Password changed successfully",
          status: "success",
        });
    } catch (error) {
      console.log("Error at resetpassword", error);
      return res.status(500).json({ message: error.message });
    }
  } else {
    return res.status(400).json({ msg: "This method is not allowed here" });
  }
};

export default connectDB(handler);
