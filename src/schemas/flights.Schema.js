import joi from 'joi'

const validateFlights = joi.object({
  depart: joi.date().required(),
  return: joi.date().required(),
  price: joi.number().positive().required()
})

export default validateFlights
