const mongoose = require('mongoose');

const blogsCategorySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["Active", "InActive"],
    },
  },
  { timestamps: true, collection: 'BlogsCategory' }
);

const BlogsCategory = mongoose.model('BlogsCategory', blogsCategorySchema);

module.exports = BlogsCategory;
