import { expect } from "chai"
import { identifyBMIClassification } from "../../../use-cases/bmi-calculator/identifyBMIClassification"

describe("Identify BMI Classification", () => {
    it("Should identify BMI Classification", () => {
        expect(identifyBMIClassification(16)).to.be.equal('Underweight')
        expect(identifyBMIClassification(20)).to.be.equal('Normal')
        expect(identifyBMIClassification(26)).to.be.equal('Overweight')
        expect(identifyBMIClassification(32)).to.be.equal('Obese Class 1')
        expect(identifyBMIClassification(36)).to.be.equal('Obese Class 2')
        expect(identifyBMIClassification(42)).to.be.equal('Obese Class 3')
    })
})
