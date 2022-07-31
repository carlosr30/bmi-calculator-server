import express, { Router } from "express"

import { calculateBMIController } from "../controllers/bmi-calculator/calculateBMI.controller"
import { calculateBMIValidator } from "../validators/bmi-calculator/calculatBMI.validator"

const router: Router = express.Router()

router.post("/bmi", calculateBMIValidator, calculateBMIController)

export default router
