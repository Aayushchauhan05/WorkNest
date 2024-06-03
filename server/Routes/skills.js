const express = require('express');
const {
    createSkill,
    getSkills,
    getSkillById,
    updateSkill,
    deleteSkill
} = require('../Controller/skills');
const addskills = require("../Controller/skillsapi");
const router = express.Router();
router.post("/skills",addskills)   
// Create a new skill
router.post('/createSkill', createSkill);

// Get all skills
router.get('/getSkills', getSkills);

// Get a skill by ID
router.get('/getSkillById/:id', getSkillById);

// Update a skill by ID
router.patch('/updateSkillById/:id', updateSkill);

// Delete a skill by ID
router.delete('/deleteSkillyById/:id', deleteSkill);

module.exports = router;
