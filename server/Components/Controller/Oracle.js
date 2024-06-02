const { Oracle } = require("../models/oracle/oracle");

// Create a new Oracle entry
exports.createOracle = async (req, res) => {
  try {
    const newOracle = new Oracle(req.body);
    const savedOracle = await newOracle.save();
    res.status(201).json(savedOracle);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all Oracle entries
exports.getAllOracles = async (req, res) => {
  try {
    const oracles = await Oracle.find().populate("freeLancerId");
    res.status(200).json(oracles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single Oracle entry by ID
exports.getOracleById = async (req, res) => {
  try {
    const oracle = await Oracle.findById(req.params.id).populate(
      "freeLancerId"
    );
    if (!oracle) return res.status(404).json({ message: "Oracle not found" });
    res.status(200).json(oracle);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update an Oracle entry by ID
exports.updateOracle = async (req, res) => {
  try {
    const oracle = await Oracle.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!oracle) return res.status(404).json({ message: "Oracle not found" });
    res.status(200).json(oracle);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete an Oracle entry by ID
exports.deleteOracle = async (req, res) => {
  try {
    const oracle = await Oracle.findByIdAndDelete(req.params.id);
    if (!oracle) return res.status(404).json({ message: "Oracle not found" });
    res.status(200).json({ message: "Oracle deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateOracleByFreelancerId = async (req, res) => {
  try {
    const oracle = await Oracle.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!oracle) return res.status(404).json({ message: "Oracle not found" });
    res.status(200).json({ message: "Oracle updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getOracleByFreelancerId = async (req, res) => {
  try {
    const oracle = await Oracle.findOne({ freeLancerId: req.params.id });
    if (!oracle) return res.status(404).json({ message: "Oracle not found" });
    res.status(200).json(oracle);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
