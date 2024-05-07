const mongoose = require("mongoose");

const callHistorySchema = mongoose.Schema(
  {
    formId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "LinkedProfile",
    },
    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customers",
    },
    astrologerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Astrologer",
    },
    startTime: {
      type: String,
      default: "",
    },
    endTime: {
      type: String,
      default: "",
    },
    durationInSeconds: {
      type: String,
      default: "",
    },
    callPrice: {
      type: String,
      default: "",
    },
    commissionPrice: {
      type: Number,
      default: 0,
    },
    totalCallPrice: {
      type: String,
      default: "",
    },
    status: {
      type: String,
      default: "Created",
    },
    transactionId: {
      type: String,
      default: "",
    },
    callId: {
      type: String,
      default: "",
    },
  },
  { collection: "CallHistory", timestamps: true }
);

// const ChatHistory = mongoose.model('ChatHistory', chatHistorySchema)

module.exports = mongoose.model("CallHistory", callHistorySchema);
