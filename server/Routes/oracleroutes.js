const express = require("express");
const router = express.Router();
const oracleController = require("../Controller/Oracle");
const OracleUserverificationmail=require("../Controller/OracleUserprojecttest")
// Create a new Oracle entry
router.post("/createOracle", oracleController.createOracle);

// Get all Oracle entries
router.get("/getAllOracles", oracleController.getAllOracles);

// Get a single Oracle entry by ID
router.get("/getOracleById/:id", oracleController.getOracleById);

// Update an Oracle entry by ID
router.put("/updateOracle/:id", oracleController.updateOracle);

// Delete an Oracle entry by ID
router.delete("/deleteOracle/:id", oracleController.deleteOracle);

// Delete an Oracle entry by FreelancerID
router.get(
  "/getOracleByFreelancerId/:id",
  oracleController.getOracleByFreelancerId
);

// Update an Oracle entry by FreelancerID
router.put(
  "/updateOracleByFreelancerId/:id",
  oracleController.updateOracleByFreelancerId
);
// email to oracle
router.get("/EmailToOracle",OracleUserverificationmail);
module.exports = router;
