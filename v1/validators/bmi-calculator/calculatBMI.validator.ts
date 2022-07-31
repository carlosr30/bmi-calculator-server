import { NextFunction, Request, Response } from "express"

import Joi from "joi"
import bmiConfig from "../../../config/bmi.config.js"
import { formatValidationErrors } from "../../helpers/validation.helper.js"

export const calculateBMIValidator = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { error } = Joi.object({
            measurementUnit: Joi.string()
                .allow(...bmiConfig.classifications)
                .required(),
            height: Joi.when("measurementUnit", {
                is: "M_AND_KG",
                then: Joi.number().greater(0).required(),
                otherwise: Joi.when("heightSecondary", {
                    is: "0",
                    then: Joi.number().integer().min(1).required(),
                    otherwise: Joi.number().integer().min(0).required(),
                }),
            }),
            heightSecondary: Joi.number()
                .integer()
                .min(0)
                .max(11)
                .when("measurementUnit", {
                    is: "FT_IN_AND_LBS",
                    then: Joi.required(),
                    otherwise: Joi.disallow(),
                }),
            weight: Joi.number().greater(0).required(),
        }).validate(req.body, { abortEarly: false })

        if (error) {
            return res.status(400).json(formatValidationErrors(error))
        }

        next()
    } catch (error) {
        next(error)
    }
}
