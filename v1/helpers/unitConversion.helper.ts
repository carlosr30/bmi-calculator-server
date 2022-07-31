export const convertFtInToMeter = (
    ftValue: number,
    inValue: number
): number => {
    return Math.round((ftValue * 0.3048 + inValue * 0.0254) * 100) / 100;
}

export const convertPoundsToKg = (value: number): number => {
    return Math.round(value * 0.453592 * 100) / 100 
}
