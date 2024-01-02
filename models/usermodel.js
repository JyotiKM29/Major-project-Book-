const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true },
    phone: { type: Number, required: true },
    city: { type: String },
    state: { type: String, required: true },
    type: { type: String },
    password: { type: String },
    isAdmin:{type:Boolean, default:false},
    resetToken: { type: String, default: null },
    resetTokenIssuedAt: { type: Date, default: null },
    resetTokenExpiresAt: { type: Date, default: null }, // New field for reset token expiry
  },
  { timestamps: true }
);

mongoose.models = {};
export default mongoose.model("user", userSchema);
