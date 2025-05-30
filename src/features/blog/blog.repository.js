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

  async getMyBlog(id) {
    const blogs = await blogModel.find({ author: id });
    return blogs;
  }

  async updateBlog(blogId, obj) {
    console.log("testing!");
    const updatedBlog = await blogModel.findOneAndUpdate({ _id: blogId }, obj, {
      new: true,
    });

    return updatedBlog;
  }
}

export default BlogRepository;
