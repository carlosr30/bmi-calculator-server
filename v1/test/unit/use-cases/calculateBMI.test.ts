import { calculateBMI } from "../../../use-cases/bmi-calculator/calculateBMI"
import { expect } from "chai"

describe("Calculate BMI", () => {
    it("Should calculate BMI", () => {
        expect(calculateBMI(1.6, 95)).to.be.equal(37.1)
    })
})
