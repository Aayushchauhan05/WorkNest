const express = require('express');
const router = express.Router();
const oracleController = require('../Controller/Oracle');

// Create a new Oracle entry
router.post('/createOracle', oracleController.createOracle);

// Get all Oracle entries
router.get('/getAllOracles', oracleController.getAllOracles);

// Get a single Oracle entry by ID
router.get('/getOracleById/:id', oracleController.getOracleById);

// Update an Oracle entry by ID
router.put('/updateOracle/:id', oracleController.updateOracle);

// Delete an Oracle entry by ID
router.delete('/deleteOracle/:id', oracleController.deleteOracle);

module.exports = router;
