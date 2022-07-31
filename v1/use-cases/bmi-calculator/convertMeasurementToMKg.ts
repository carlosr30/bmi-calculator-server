import { convertFtInToMeter, convertPoundsToKg } from "../../helpers/unitConversion.helper"

export const convertMeasurementToMeterAndKg = ({
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
        case 'FT_IN_AND_LBS':
            return {
                height: convertFtInToMeter(height, heightSecondary || 0),
                weight: convertPoundsToKg(weight)
            }
            

        case 'M_AND_KG':
            return {
                height: height,
                weight: weight
            }

        default: 
            throw new Error('Measurement Unit Not Supported.')
    }
}
