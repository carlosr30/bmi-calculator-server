import bmiConfig from "../../../config/bmi.config.js"

export const identifyBMIClassification = (bmi: number) => {
    const classification = bmiConfig.classifications.find(
        (classification: { name: string; min: number; max: number }) => {
            return bmi >= classification.min && bmi <= classification.max
        }
    )

    if (! classification) {
        throw new Error("BMI Classification does not exist.")
    }

    return classification.name
}
