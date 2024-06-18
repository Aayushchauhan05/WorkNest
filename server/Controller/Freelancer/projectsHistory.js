const Project = require("../../models/freelancer/projectSchema");
const Freelancer = require("../../models/freelancer/Freelancerreg");

exports.createProject = async (req, res) => {
  try {
    const projectData = req.body;
    const freelancerId = projectData.freelancerId;

    // Create a new project document
    const newProject = await Project.create(projectData);

    // Update the freelancer with the new project ID
    await Freelancer.findByIdAndUpdate(freelancerId, {
      $push: { projects: newProject._id },
    });

    res.status(201).json(newProject);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating project", error });
  }
};

exports.getFreelancerProjects = async (req, res) => {
  try {
    const freelancerId = req.params.id;
    const freelancer = await Freelancer.findById(freelancerId).populate(
      "projects"
    );

    if (!freelancer) {
      return res.status(404).json({ message: "Freelancer not found" });
    }

    res.status(200).json(freelancer.projects);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching projects", error });
  }
};

exports.updateProject = async (req, res) => {
  try {
    const projectId = req.params.id;
    const updateData = req.body;

    const updatedProject = await Project.findByIdAndUpdate(
      projectId,
      updateData,
      {
        new: true, // Return the updated document
        runValidators: true, // Run schema validators on update
      }
    );

    if (!updatedProject) {
      return res.status(404).json({ message: "Project not found" });
    }

    res.status(200).json(updatedProject);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating project", error });
  }
};
