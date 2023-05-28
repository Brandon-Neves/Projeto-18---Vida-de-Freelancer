import express from 'express'
import { validateSchema } from '../middlewares/validateSchema.js'
import validateCities from '../schemas/cities.Schema.js'
import { createCities, getCities } from '../controllers/cities.Controller.js'

const citiesRouter = express.Router()

citiesRouter.post('/cities', validateSchema(validateCities), createCities)
citiesRouter.get('/cities', getCities)

export default citiesRouter
