const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  image: {
    type: String,
    required: true,
  },
  astrologer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Astrologer' // Reference to Astrologer model
  },
  description: String,
  youtubeLink: {
    type: String,
    required: true,
  },
  rating: {
    type: String,
    required: true
  },
  deleted: {
    type: Boolean,
    default: false
  }
}, { collection: 'Testimonial', timestamps: true });

// Middleware to filter out soft deleted documents
testimonialSchema.pre('find', function () {
  this.where({ deleted: false });
});

const Testimonial = mongoose.model('Testimonial', testimonialSchema);

module.exports = Testimonial;
