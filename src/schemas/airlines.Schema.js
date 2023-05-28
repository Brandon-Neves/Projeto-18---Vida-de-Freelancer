import joi from 'joi'

const validateAirlines = joi.object({
  name: joi.string().min(3).required()
})

export default validateAirlines
