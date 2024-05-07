const express = require("express");
const router = express.Router();

const webController = require("../controllers/webController");

//blogs
router.get("/blogs", webController.getAllBlogs);


router.get("/testimonials", webController.getAllTestimonials);

module.exports = router;
