import mongoose from "mongoose";

const connectDB = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/learning-backend")
    .then((data) => {
      console.log("Database is connected successfuckly!");
    })
    .catch((err) => {
      console.log(err);
    });
};

export default connectDB;
