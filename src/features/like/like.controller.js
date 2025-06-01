import LikeRepository from "./like.repository.js";

class LikeController {
  constructor() {
    this.likeRepository = new LikeRepository();
  }

  async toggle(req, res) {
    const { blogId } = req.params;
    const userId = req.userId;
    try {
      const like = await this.likeRepository.toggleLike(blogId, userId);
      return res.json({ message: like });
    } catch (err) {
      console.log(err);
      return res.json({ message: "Internal server problem!" });
    }
  }

  async getLikes(req, res) {
    const { blogId } = req.params;
    const likes = await this.likeRepository.getLikes(blogId);
    const count = likes.length;
    // const email = likes.map((obj) => {
    //   return obj.userId.email;
    // });
    return res.json({ message: "Likes get successfully", likes, count: count });
  }
}

export default LikeController;
