import express from "express";
import UserController from "./user.controller.js";

const userRouter = express.Router();

const userController = new UserController();

userRouter.post("/signup", (req, res) => {
  userController.signup(req, res);
});

userRouter.post("/login", (req, res) => {
  userController.login(req, res);
});


export default userRouter;
