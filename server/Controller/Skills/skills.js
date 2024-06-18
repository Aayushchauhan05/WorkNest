const Skills = require("../../models/Common/skills");

// Create a new skill
const createSkill = async (req, res) => {
  try {
    const skill = new Skills(req.body);
    await skill.save();
    res.status(201).send(skill);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Get all skills
const getSkills = async (req, res) => {
  try {
    const skills = await Skills.find({});
    res.status(200).send(skills);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Get a skill by ID
const getSkillById = async (req, res) => {
  try {
    const skill = await Skills.findById(req.params.id);
    if (!skill) {
      return res.status(404).send();
    }
    res.status(200).send(skill);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Update a skill by ID
const updateSkill = async (req, res) => {
  try {
    const skill = await Skills.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!skill) {
      return res.status(404).send();
    }
    res.status(200).send(skill);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Delete a skill by ID
const deleteSkill = async (req, res) => {
  try {
    const skill = await Skills.findByIdAndDelete(req.params.id);
    if (!skill) {
      return res.status(404).send();
    }
    res.status(200).send(skill);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  createSkill,
  getSkills,
  getSkillById,
  updateSkill,
  deleteSkill,
};
