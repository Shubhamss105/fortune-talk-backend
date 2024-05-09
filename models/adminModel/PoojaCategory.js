const mongoose = require("mongoose");

const poojaCategorySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["Active", "InActive"],
    },
    deleted: {
      type: Boolean,
      default: false,
    },
  },
  { collection: "PoojaCategory", timestamps: true }
);

poojaCategorySchema.pre("find", function () {
  this.where({ deleted: false });
});

const PoojaCategory = mongoose.model("PoojaCategory", poojaCategorySchema);

module.exports = PoojaCategory;
