const { Freelancer } = require("../models/freelancer/Freelancerreg");
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

exports.sendUserDetailsToOracle = async (req, res) => {
  try {
    const freelancerData = await Freelancer.find({$and:[{ workExperience: { $gte: 2} },{oracle:true}]});
    if (!freelancerData || freelancerData.length === 0) {
      return res.status(404).json({ message: "no user found" });
    }

    const updatedFreelancers = await Promise.all(freelancerData.map(async (elem) => {
      const randomUsers = await Freelancer.aggregate([
        { $match: { isverified: false } },
        { $sample: { size: 5 } }
      ]);

      if (!randomUsers || randomUsers.length==0) {
        return { id: elem._id, status: 'no users found for verification' };
      }

      const randomUserIds = randomUsers.map(user => user._id);
      await Freelancer.findByIdAndUpdate(
        { _id: elem._id },
        { $addToSet: { oracledata: { $each: randomUserIds } } }
      );

      return { id: elem._id, status: 'updated' };
    }));

    return res.status(200).json({ message: "success", data: updatedFreelancers });

  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "internal server error" });
  }
}

exports.sendUserProjectToOracle=async (req,res)=>{
try {
  const user= await Freelancer.find({$and:[{ workExperience: { $gte: 2} },{oracle:true}]})
  const userData= await Promise.all(user.map(async (elem)=>{
const randomUsers= await Project.aggregate([
  { $match:{isverified:false} },
  {$sample:{size:5}}
  
])
if (!randomUsers || randomUsers.length==0) {
  return { id: elem._id, status: 'no users found for verification' };
}
const randomUserIds = randomUsers.map(user => user._id);
await Freelancer.findByIdAndUpdate(
  { _id: elem._id },
  { $addToSet: { oracleProject: { $each: randomUserIds } } }
);
return { id: elem._id, status: 'updated' };
  }))

  return res.status(200).json({ message: "success", data: updatedFreelancers });
} catch (error) {
  console.log(error)
  return res.status(500).json({message:"Internal server error"})
}
}
// oracleProject