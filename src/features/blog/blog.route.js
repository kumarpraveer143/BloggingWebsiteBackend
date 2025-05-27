import express from "express";
import BlogController from "./blog.controller.js";
import authMiddleware from "../../middleware/authMiddleware.js";

const blogRouter = express.Router();

const blogController = new BlogController();

blogRouter.get("/", authMiddleware, (req, res) => {
  blogController.getBlogs(req, res);
});

blogRouter.post("/addBlog", (req, res) => {
  blogController.addBlog(req, res);
});

export default blogRouter;
