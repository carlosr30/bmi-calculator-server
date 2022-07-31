import { ValidationError, ValidationErrorItem } from "joi"

export const formatValidationErrors = (validationError: ValidationError) => {
    let formattedValidationErrors: {
        [key: string]: string
    } = {}

    validationError.details.forEach((error: ValidationErrorItem) => {
        if (error?.context?.key) {
            formattedValidationErrors[error?.context?.key] = error.message
        }
    })

    return formattedValidationErrors
}
