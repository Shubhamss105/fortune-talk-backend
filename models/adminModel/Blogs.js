const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true
    },
    blogCategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'BlogCategory'
    },
    created_by: {
        type: String,
        required: true,
    },
    status: {
        type: Number,
        default: 0  
    },
    description: {
        type: String
    },
    deleted: {
        type: Boolean,
        default: false
    }
}, { collection: 'Blogs', timestamps: true });

blogSchema.pre('find', function () {
    this.where({ deleted: false });
});

const Blogs = mongoose.model('Blogs', blogSchema);

module.exports = Blogs;
