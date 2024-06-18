const express = require("express");
const router = express.Router();
const Oracle = require("../Controller/Freelancer/oracle");

router.get("/getOracleByFreelancerId/:id", Oracle.getOracleByFreelancerId);

// Update an Oracle entry by FreelancerID
router.put(
  "/updateOracleByFreelancerId/:id",
  Oracle.updateOracleByFreelancerId
);
// email to oracle
router.get("/EmailToOracle", Oracle.OracleUserverificationmail);

// details to oracle
router.put("/detailsToOracle", Oracle.sendUserDetailsToOracle);

module.exports = router;
