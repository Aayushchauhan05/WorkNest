const { Schema, model } = require("mongoose");

const applyforpositionSchema = new Schema({
  Email: {
    type: String,
    required: true,
  },
  desiredSalary: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "Pending",
  },
  projectId: {
    type: Schema.Types.ObjectId,
    ref: "ProjectListByCompany",
    required: true,
  },
});

const ApplyForPosition = new model(
  "Applicationforwork",
  applyforpositionSchema
);
module.exports = { ApplyForPosition };
