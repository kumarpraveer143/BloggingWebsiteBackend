import BlogRepository from "./blog.repository.js";

class BlogController {
  constructor() {
    this.blogRepository = new BlogRepository();
  }

  async addBlog(req, res) {
    const blogObj = req.body;
    const author = req.userId;
    blogObj.author = author;
    try {
      const blog = await this.blogRepository.addBlog(blogObj);
      return res.json({ message: "blog created Successfully", blog });
    } catch (err) {
      return res.json({ message: "Something went wrong here!" });
    }
  }

  async getBlogs(req, res) {
    const blogs = await this.blogRepository.getBlogs();
    return res.json({ blogs });
  }

  async getMyBlog(req, res) {
    const myId = req.userId;
    const blogs = await this.blogRepository.getMyBlog(myId);
    return res.json({ blogs });
  }

  async updateBlog(req, res) {
    const { blogId } = req.params;
    try {
      const updatedBlog = await this.blogRepository.updateBlog(
        blogId,
        req.body
      );
      return res.json({ updatedBlog });
    } catch (err) {
      console.log(err);
    }
  }
}

export default BlogController;
