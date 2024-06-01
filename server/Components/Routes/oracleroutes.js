const express = require('express');
const router = express.Router();
const oracleController = require('../Controller/Oracle');

// Routes for CRUD operations
router.post('/oracle', oracleController.createOracle);
router.get('/oracle', oracleController.getAllOracles);
router.get('/oracle/:id', oracleController.getOracleById);
router.put('/oracle/:id', oracleController.updateOracleById);
router.delete('/oracle/:id', oracleController.deleteOracleById);

module.exports = router;
