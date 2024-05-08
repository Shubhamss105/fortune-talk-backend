const mongoose = require("mongoose");

const fortuneStoreSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    storeCategory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "storeCategory",
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
  { collection: "FortuneStore", timestamps: true }
);

fortuneStoreSchema.pre("find", function () {
  this.where({ deleted: false });
});

const FortuneStore = mongoose.model("FortuneStore", fortuneStoreSchema);

module.exports = FortuneStore;
