const mongoose = require("mongoose");

const kundliSchema = mongoose.Schema(
  {
    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customers",
    },
    name: {
      type: String,
      default: "",
    },
    gender: {
      type: String,
      default: "",
    },
    dob: {
      type: Date,
      default: "",
    },
    tob: {
      type: String,
      default: "",
    },
    place: {
      type: String,
      default: 0,
    },
    lat: {
      type: Number,
      default: "",
    },
    long: {
      type: Number,
      default: "",
    }
  },
  { collection: "Kundli", timestamps: true }
);

module.exports = mongoose.model("Kundli", kundliSchema);
