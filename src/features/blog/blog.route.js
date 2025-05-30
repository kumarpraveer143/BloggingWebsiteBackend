import express from "express";
import BlogController from "./blog.controller.js";
import authMiddleware from "../../middleware/authMiddleware.js";

const blogRouter = express.Router();

const blogController = new BlogController();

blogRouter.get("/", authMiddleware, (req, res) => {
  blogController.getBlogs(req, res);
});

//adding blog route(Add)
blogRouter.post("/addBlog", authMiddleware, (req, res) => {
  blogController.addBlog(req, res);
});

//get my blog route
blogRouter.get("/getMyblog", authMiddleware, (req, res) => {
  blogController.getMyBlog(req, res);
});

//update blog
blogRouter.patch("/updateBlog/:blogId", authMiddleware, (req, res) => {
  blogController.updateBlog(req, res);
});

//this is your homework!
blogRouter.delete("/deleteBlog/:blogId", authMiddleware, (req, res) => {
  blogController.deleteBlog(req, res);
});

//crate
//add
//edit/update
//delete blog

export default blogRouter;
