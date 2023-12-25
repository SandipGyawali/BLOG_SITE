const mongoose = require("mongoose");

const BlogCategory = Object.freeze(["travel", "fitness", "finance"]);

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    summary: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    photo: {
      pic_name: String,
      mimetype: String,
      size: Number,
      data: Buffer,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    category: {
      type: String,
      enum: BlogCategory,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Blog", blogSchema);
module.exports.BlogCategory = BlogCategory;
