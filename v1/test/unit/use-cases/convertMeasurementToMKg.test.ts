import { convertMeasurementToMeterAndKg } from "../../../use-cases/bmi-calculator/convertMeasurementToMKg"
import { expect } from "chai"

describe("Convert Measurement to M and KG", () => {
    it("Should convert measurement to M and KG", () => {
        const { height, weight } = convertMeasurementToMeterAndKg({
            measurementUnit: "M_AND_KG",
            height: 1.6,
            weight: 95,
        })

        
        expect(height).to.be.equal(1.6)
        expect(weight).to.be.equal(95)
    })

    it("Should convert measurement to M and KG (From Ft and Lbs)", () => {
        const { height, weight } = convertMeasurementToMeterAndKg({
            measurementUnit: "FT_IN_AND_LBS",
            height: 5,
            heightSecondary: 3,
            weight: 209.439,
        })
        
        expect(height).to.be.equal(1.6)
        expect(weight).to.be.equal(95)
    })
})
