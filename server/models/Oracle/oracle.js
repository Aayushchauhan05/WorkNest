const { Schema, model } = require("mongoose");
const oracleUse = new Schema(
  {
    freeLancerId: {
      type: Schema.Types.ObjectId,
      ref: "freelancer_data",
    },
    experienceYears: {
      type: Number,
      required: true,
      min: 5,
    },
    status: {
      type: String,
      enum: ["Not Applicable", "Applicable", "Stopped"],
      default: "Not Applicable",
    },
  },
  { timestamps: true }
);

const Oracle = new model("Oracle", oracleUse);
module.exports = { Oracle };
