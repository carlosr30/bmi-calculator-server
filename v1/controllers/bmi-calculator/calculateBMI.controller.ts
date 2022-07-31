import { NextFunction, Request, Response } from "express"

import { calculateBMI } from "../../use-cases/bmi-calculator/calculateBMI.js"
import { convertMeasurementToMetric } from "../../use-cases/bmi-calculator/convertMeasurementToMKg"
import { identifyBMIClassification } from "../../use-cases/bmi-calculator/identifyBMIClassification.js"

export const calculateBMIController = async (
    req: Request,
    res: Response,
    next: NextFunction
) : Promise<void> => {
    try {
        const { height, weight } = convertMeasurementToMetric({
            measurementUnit: req.body.measurementUnit,
            height: req.body.height,
            heightSecondary: req.body.heightSecondary,
            weight: req.body.weight,
        })

        const bmi = calculateBMI(height, weight)
        res.status(200).json({
            bmi: bmi,
            classification: identifyBMIClassification(bmi),
        })
    } catch (error) {
        next(error)
    }
}
