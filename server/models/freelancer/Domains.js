// models/Domain.js
const { Schema, model } = require("mongoose");

const domainSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      index: true,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

const Domain = model("Domain", domainSchema);
module.exports = { Domain };
