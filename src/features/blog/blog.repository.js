import mongoose from "mongoose";
import blogSchema from "./blog.schema.js";

const blogModel = mongoose.model("Blog", blogSchema);

class BlogRepository {
  async addBlog(blogObj) {
    const blog = new blogModel(blogObj);
    await blog.save();
    return blog;
  }

  async getBlogs() {
    const blogs = await blogModel.find({});
    return blogs;
  }
}

export default BlogRepository;
