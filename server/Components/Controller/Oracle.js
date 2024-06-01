const { Oracle } = require('../models/Oracle/oracle');

// Create Oracle
const createOracle = async (req, res) => {
    try {
        const { freeLancerId, experienceYears, status } = req.body;
        const oracle = new Oracle({ freeLancerId, experienceYears, status });
        await oracle.save();
        res.status(201).json(oracle);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all Oracles
const getAllOracles = async (req, res) => {
    try {
        const oracles = await Oracle.find();
        res.json(oracles);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get Oracle by ID
const getOracleById = async (req, res) => {
    try {
        const { id } = req.params;
        const oracle = await Oracle.findById(id);
        if (!oracle) {
            return res.status(404).json({ message: 'Oracle not found' });
        }
        res.json(oracle);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update Oracle by ID
const updateOracleById = async (req, res) => {
    try {
        const { id } = req.params;
        const { freeLancerId, experienceYears, status } = req.body;
        const updatedOracle = await Oracle.findByIdAndUpdate(id, { freeLancerId, experienceYears, status }, { new: true });
        if (!updatedOracle) {
            return res.status(404).json({ message: 'Oracle not found' });
        }
        res.json(updatedOracle);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete Oracle by ID
const deleteOracleById = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedOracle = await Oracle.findByIdAndDelete(id);
        if (!deletedOracle) {
            return res.status(404).json({ message: 'Oracle not found' });
        }
        res.json({ message: 'Oracle deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createOracle,
    getAllOracles,
    getOracleById,
    updateOracleById,
    deleteOracleById
};
