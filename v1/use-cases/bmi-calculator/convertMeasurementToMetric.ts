import { convertFtInToCentimeter, convertPoundsToKg } from "../../helpers/unitConversion.helper"

export const convertMeasurementToMetric = ({
    measurementUnit,
    height,
    heightSecondary,
    weight,
}: {
    measurementUnit: string,
    height: number
    heightSecondary?: number
    weight: number
}) : {
    height: number,
    weight: number,
} => {
    switch (measurementUnit) {
        case 'STANDARD':
            return {
                height: convertFtInToCentimeter(height, heightSecondary || 0),
                weight: convertPoundsToKg(weight)
            }
            
        case 'METRIC':
            return {
                height: height,
                weight: weight
            }

        default: 
            throw new Error('Measurement Unit Not Supported.')
    }
}
