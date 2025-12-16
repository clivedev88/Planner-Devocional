const PlanModel = require('../models/PlanModel')
const db = require('../config/db');
class PlanControllers {
    static generatePlan(req, res) {
        const {theme} = req.body;
        const plan = PlanModel.generatePlan(theme);

        db.prepare('INSERT INTO plans (theme, plan) VALUES (?, ?)'
        ).run(theme, JSON.stringify(plan)
        );

        res.status(200).json({
            tema:theme,
            plano:plan
        })
    }
}

module.exports = PlanControllers;