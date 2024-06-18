const { Freelancer } = require("../../models/freelancer/Freelancerreg");

const freelancerInfo = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await Freelancer.findById(id).populate("project");
    if (!user) {
      return res.status(404).json({ message: "not user found" });
    }
    return res.status(200).json({ user });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

//update freelancer normal info which we don't need to verify with oracle
const updateFreelancer = async (req, res) => {
  try {
    const freelancerId = req.params.id;
    const updateData = req.body;
    const updatedFreelancer = await Freelancer.findByIdAndUpdate(
      freelancerId,
      updateData,
      {
        new: true, // Return the updated document
        runValidators: true, // Run schema validators on update
      }
    );

    if (!updatedFreelancer) {
      return res.status(404).json({ message: "Freelancer not found" });
    }

    res.status(200).json(updatedFreelancer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating freelancer", error });
  }
};

module.exports = { freelancerInfo, updateFreelancer };
