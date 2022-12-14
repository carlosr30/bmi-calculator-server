import { convertMeasurementToMetric } from "../../../use-cases/bmi-calculator/convertMeasurementToMetric"
import { expect } from "chai"

describe("Convert Measurement to Metric", () => {
    it("Should convert measurement to Metric", () => {
        const { height, weight } = convertMeasurementToMetric({
            measurementUnit: "METRIC",
            height: 160,
            weight: 95,
        })

        
        expect(height).to.be.equal(160)
        expect(weight).to.be.equal(95)
    })

    it("Should convert measurement to Metric (From Standard)", () => {
        const { height, weight } = convertMeasurementToMetric({
            measurementUnit: "STANDARD",
            height: 5,
            heightSecondary: 3,
            weight: 209.439,
        })
        
        expect(height).to.be.equal(160.02)
        expect(weight).to.be.equal(95)
    })
})
