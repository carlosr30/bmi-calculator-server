export default {
    measurement_units: [
        'METRIC',
        'STANDARD'
    ],
    classifications: [
        {
            name: 'Underweight',
            min: Number.NEGATIVE_INFINITY,
            max: 18.4
        },
        {
            name: 'Normal',
            min: 18.5,
            max: 24.9
        },
        {
            name: 'Overweight',
            min: 25.0,
            max: 29.9
        },
        {
            name: 'Obese Class 1',
            min: 30.0,
            max: 34.9
        },
        {
            name: 'Obese Class 2',
            min: 35.0,
            max: 39.9,
        },
        {
            name: 'Obese Class 3',
            min: 40.0,
            max: Number.POSITIVE_INFINITY
        }
    ]
}