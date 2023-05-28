import joi from 'joi'

const validateHotels = joi.object({
  name: joi.string().min(3).required(),
  adress: joi.string().min(5).required(),
  price: joi.number().positive().required(),
  description: joi.string().min(3).required()
})

export default validateHotels
