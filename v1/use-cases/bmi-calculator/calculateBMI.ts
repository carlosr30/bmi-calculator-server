export const calculateBMI = (height: number, weight: number) => {
    const heightInM = height / 100;
    return parseFloat((weight / (heightInM * heightInM)).toFixed(1))
}
