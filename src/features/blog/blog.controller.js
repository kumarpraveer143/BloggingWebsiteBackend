import BlogRepository from "./blog.repository.js";

class BlogController {
  constructor() {
    this.blogRepository = new BlogRepository();
  }
  async addBlog(req, res) {
    const blogObj = req.body;
    const blog = await this.blogRepository.addBlog(blogObj);
    return res.json({ message: "blog created Successfully", blog });
  }

  async getBlogs(req, res) {
    const blogs = await this.blogRepository.getBlogs();
    return res.json({ blogs });
  }
}

export default BlogController;
