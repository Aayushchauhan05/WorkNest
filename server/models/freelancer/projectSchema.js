const { Schema, model } = require("mongoose");
const freelancer_project = new Schema(
  {
    projectName: {
      type: String,
      required: true,
    },
    Description: {
      type: String,
      required: true,
    },
    verified: {
      type: Schema.Types.Mixed,
    },
    githubLink: {
      type: String,
      required: true,
    },
    Start: {
      type: Date,
    },
    End: {
      type: Date,
    },
    Refer: {
      type: String,
      required: true,
    },
    TechUsed: [
      {
        type: String,
        required: true,
      },
    ],
    Role: {
      type: String,
      required: true,
    },
    projectType: {
      type: String,
    },
    oracle_assigned: {
      type: Schema.Types.ObjectId,
      ref: "freelancer_data",
    },
    verificationStatus: {
      type: String,
      default: "added", // e.g., "added", "verified", "rejected", "reapplied"
    },
    verificationUpdateTime: {
      type: Schema.Types.Date,
    },
    comments: {
      type: String,
    },
  },
  { timestamps: true }
);

const Project = model("Project", freelancer_project);
module.exports = { Project };
