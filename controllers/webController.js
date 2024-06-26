const Blogs = require("../models/adminModel/Blogs");
const Testimonials = require("../models/adminModel/Testimonial");

//blogs
exports.getAllBlogs = async (req, res) => {
  try {
    const allBlogs = await Blogs.find();

    if (allBlogs.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "No blogs found" });
    }

    res.status(200).json({ success: true, data: allBlogs });
  } catch (error) {
    console.error("Error fetching blogs:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

exports.getAllTestimonials = async (req, res) => {
  try {
    const allTestimonials = await Testimonials.find();

    if (allTestimonials.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "No testimonials found" });
    }

    res.status(200).json({ success: true, data: allTestimonials });
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
