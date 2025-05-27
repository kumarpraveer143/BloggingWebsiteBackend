import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: {
      type: String,
      select: false,
      required: true,
    },
  },
  { timestamps: true }
);

export default userSchema;
