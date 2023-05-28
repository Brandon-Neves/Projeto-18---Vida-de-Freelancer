import joi from 'joi'

const validateImages = joi.object({
  url: joi.url().required()
})

export default validateCities
