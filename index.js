//created for the learning purpose

import express from "express";
import dotenv from "dotenv";
import userRouter from "./src/features/user/user.route.js";
import connectDB from "./src/config/mongodb.config.js";
import blogRouter from "./src/features/blog/blog.route.js";
import cookieParser from "cookie-parser";
dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json()); //to parse the data
app.use(cookieParser()); //to play with the cookie!
//contributed by rishi

app.use("/api/users", userRouter); //complete!
app.use("/api/blogs", blogRouter); 

app.listen(port, () => {
  //created server
  connectDB();
  console.log("Server is up at the port", port);
});
