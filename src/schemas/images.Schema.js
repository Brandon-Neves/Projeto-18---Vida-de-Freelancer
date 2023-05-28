import joi from 'joi'

const validateImages = joi.object({
  url: joi.string().uri().required()
})

export default validateImages
