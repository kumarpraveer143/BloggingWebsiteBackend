import mongoose from "mongoose";
import likeSchema from "./like.schema.js";

const likeModel = mongoose.model("like", likeSchema);

class LikeRepository {
  async toggleLike(blogId, userId) {
    const like = await likeModel.findOne({ blogId, userId });
    if (like) {
      const deletedLike = await likeModel.findOneAndDelete({ blogId, userId });
      return "Unliked successfully";
    } else {
      const newLike = new likeModel({ blogId, userId });
      await newLike.save();
      return "Liked successfully";
    }
  }
  async getLikes(blogId) {
    const likes = await likeModel.find({ blogId }).populate("userId");
    return likes;
  }
}

export default LikeRepository;
