export const calculateBMI = (height: number, weight: number) => {
    return parseFloat((weight / (height * height)).toFixed(1))
}
