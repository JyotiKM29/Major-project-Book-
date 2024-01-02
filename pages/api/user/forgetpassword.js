import connectDB from "@/middleware/mongoose";
import user from "../../../models/usermodel";
import jwt from "jsonwebtoken";

const handler = async (req, res) => {
  try {
    const { email } = req.body;

    const existingUser = await user.findOne({ email });

    if (existingUser) {
      const issuedAt = await new Date();
      const expiresIn = 3600; // 1 hour in seconds
      const expiresAt = await new Date(issuedAt.getTime() + expiresIn * 1000);
      console.log("expire time", expiresAt);

      const token = await jwt.sign(
        { email: existingUser.email, issuedAt, expiresAt },
        "your-secret-key",
        { expiresIn: expiresIn }
      );

      // Store the token and related information in the user document
      existingUser.resetToken = token;
      existingUser.resetTokenIssuedAt = issuedAt;
      existingUser.resetTokenExpiresAt = expiresAt;
      await existingUser.save();

      res.status(200).json({
        status: "success",
        msg: "Token created and stored successfully",
        token,
        existingUser,
      });
    } else {
      res.status(404).json({
        status: "error",
        msg: "User not found, please check the credentials",
      });
    }
  } catch (error) {
    console.log("Error at forget password", error);
    res.status(500).json({
      msg: error.message,
      status: "internal server error",
    });
  }
};

export default connectDB(handler);
