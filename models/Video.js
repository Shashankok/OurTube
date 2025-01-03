const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    title: { type: String, required: true },
    description: { type: String, required: true },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    video_url: { type: String, required: true },
    thumbnail_url: { type: String, required: true },
    videoId: { type: String, required: true },
    thumbnailId: { type: String, required: true },
    category: { type: String, required: true },
    tags: [{ type: String }],
    likes: { type: Number, default: 0 },
    dislikes: { type: Number, default: 0 },
    views: { type: Number, default: 0 },
    likedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    dislikedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    viewedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    videoDuration: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Video", videoSchema);
