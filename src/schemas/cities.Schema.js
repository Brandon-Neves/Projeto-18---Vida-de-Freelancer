import joi from 'joi'

const validateCities = joi.object({
  name: joi.string().min(3).required()
})

export default validateCities
