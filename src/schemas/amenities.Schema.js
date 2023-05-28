import joi from 'joi'

const validateAmeneties = joi.object({
  name: joi.string().min(3).required()
})

export default validateAmeneties
