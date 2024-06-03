const express = require('express');
const {
    createInterviewer,
    getAllInterviewers,
    getInterviewerById,
    updateInterviewer,
    deleteInterviewer
} = require('../Controller/Interviewer');

const router = express.Router();

// Routes
router.post('/createInterviewer', createInterviewer);
router.get('/getAllInterviewers', getAllInterviewers);
router.get('/getInterviewerById/:id', getInterviewerById);
router.patch('/updateInterviewer/:id', updateInterviewer);
router.delete('/deleteInterviewer/:id', deleteInterviewer);

module.exports = router;
