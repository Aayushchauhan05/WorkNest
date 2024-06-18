// models/Verification.js
const { Schema, model } = require("mongoose");

const verificationSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "freelancer_data",
      required: true,
    },
    verificationStatus: {
      type: String,
      default: "added", // e.g., "added", "verified", "rejected", "reapplied"
    },
    verificationDate: {
      type: Schema.Types.Date,
    },
    type: {
      type: String, // Type of information being verified: "project", "education", "professionalInfo"
      required: true,
    },
    referenceId: {
      type: Schema.Types.ObjectId, // Reference to the specific project, education, or professionalInfo entry
      required: true,
    },
  },
  { timestamps: true }
);

const Verification = model("Verification", verificationSchema);
module.exports = { Verification };
