// models/Interview.js
const { Schema, model } = require("mongoose");

const interviewSchema = new Schema(
  {
    interviewer: {
      type: Schema.Types.ObjectId,
      ref: "freelancer_data",
      required: true,
    },
    interviewee: {
      type: Schema.Types.ObjectId,
      ref: "freelancer_data",
      required: true,
    },
    skill: {
      type: String,
      required: true,
    },
    interviewDate: {
      type: Schema.Types.Date,
      required: true,
    },
    rating: {
      type: Number, // out of 10
      default: "pending",
    },
    comments: {
      type: String,
    },
  },
  { timestamps: true }
);

const Interview = model("Interview", interviewSchema);
module.exports = { Interview, interviewSchema };
