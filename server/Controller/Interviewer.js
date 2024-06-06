const { Interviewer } = require('../models/interviewer/interviewer');

// Create a new interviewer
const createInterviewer = async (req, res) => {
    try {
        const interviewer = new Interviewer(req.body);
        await interviewer.save();
        res.status(201).send(interviewer);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Get all interviewers
const getAllInterviewers = async (req, res) => {
    try {
        const interviewers = await Interviewer.find();
        res.status(200).send(interviewers);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Get a specific interviewer by ID
const getInterviewerById = async (req, res) => {
    try {
        const interviewer = await Interviewer.findById(req.params.id);
        if (!interviewer) {
            return res.status(404).send();
        }
        res.status(200).send(interviewer);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Update an interviewer by ID
const updateInterviewer = async (req, res) => {
    try {
        const interviewer = await Interviewer.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!interviewer) {
            return res.status(404).send();
        }
        res.status(200).send(interviewer);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Delete an interviewer by ID
const deleteInterviewer = async (req, res) => {
    try {
        const interviewer = await Interviewer.findByIdAndDelete(req.params.id);
        if (!interviewer) {
            return res.status(404).send();
        }
        res.status(200).send(interviewer);
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = {
    createInterviewer,
    getAllInterviewers,
    getInterviewerById,
    updateInterviewer,
    deleteInterviewer
};
