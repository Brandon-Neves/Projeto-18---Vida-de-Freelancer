import joi from 'joi'

const validateAirliness = joi.object({
  name: joi.string().min(3).required()
})

export default validateAirliness
