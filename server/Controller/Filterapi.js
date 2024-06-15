const { ProjectListByBusiness } = require("../models/Business/ProjectSchema");
const { Freelancer } = require("../models/freelancer/Freelancerreg");

const hirefilter = async (req, res) => {
    try {
        const { role = "all", price = "all", skills = "all" } = req.query;

        let filter = {};

        if (role !== "all") {
            filter.role = role;
        }
        if (price !== "all") {
            filter.price = price;
        }
        if (skills !== "all") {
            filter.skills = { $in: skills.split(',') };
        }

        const data = await Freelancer.find(filter);

        if (data.length > 0) {
            return res.status(200).json({ data });
        } else {
            return res.status(404).json({ message: "No data found" });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}
const jobfilter= async ()=>{
    try {
        const {category="all",budget="all",experience="all"}=req.query;
        let filter={}
        if (category!=="all") {
            filter.category=category
        }
        if (budget!=="all") {
            filter.category=category
        }
        if (experience!=="all") {
            filter.category=category
        }
        const data= await ProjectListByBusiness.find(filter)
        if (data.length > 0) {
            return res.status(200).json({ data });
        } else {
            return res.status(404).json({ message: "No data found" });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}
module.exports = { hirefilter,jobfilter };
