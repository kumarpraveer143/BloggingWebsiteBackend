import express from "express";
import LikeController from "./like.controller.js";
import authMiddleware from "../../middleware/authMiddleware.js";

const likeRouter = express.Router();

//which routes will be there?
// 1. get like of particular blog
// 2. toggle like to particular blog

const likeController = new LikeController();

//get number of like and with users
likeRouter.get("/:blogId", authMiddleware, (req, res) => {
  likeController.getLikes(req, res);
});

likeRouter.get("/toggleLike/:blogId", authMiddleware, (req, res) => {
  likeController.toggle(req, res);
});

export default likeRouter;
