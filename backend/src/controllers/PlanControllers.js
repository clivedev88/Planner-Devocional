const PlanModel = require('../models/PlanModel')

class PlanControllers {
    static generatePlan(req, res) {
        const {theme} = req.body;
        const plan = PlanModel.generatePlan(theme);

        res.status(200).json({
            tema:theme,
            plano:plan
        })
    }
}

module.exports = PlanControllers;