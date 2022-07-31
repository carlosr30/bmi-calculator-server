export const convertFtInToCentimeter = (
    ftValue: number,
    inValue: number
): number => {
    return Math.round((ftValue * 30.48 + inValue * 2.54) * 100) / 100;
}

export const convertPoundsToKg = (value: number): number => {
    return Math.round(value * 0.453592 * 100) / 100 
}
