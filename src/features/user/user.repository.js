import mongoose from "mongoose";
import userSchema from "./user.schema.js";

const userModel = mongoose.model("User", userSchema);

class UserRepository {
  async signup(userObj) {
    const user = new userModel(userObj);
    await user.save();
    return user;
  }

  async findUserByEmail(email) {
    const user = await userModel.findOne({ email: email }).select("+password");
    return user;
  }
}

export default UserRepository;
