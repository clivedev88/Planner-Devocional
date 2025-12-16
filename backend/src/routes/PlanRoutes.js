const express = require('express');
const router = express.Router();
const planController = require('../controllers/PlanControllers')

router.post('/generate-plan', planController.generatePlan);;

module.exports = router;