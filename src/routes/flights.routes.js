import express from 'express'
import { validateSchema } from '../middlewares/validateSchema.js'
import validateFlights from '../schemas/flights.Schema.js'
import { createFlights, getFlights } from '../controllers/flights.Controller.js'

const hotelsRouter = express.Router()

hotelsRouter.post('/flights', validateSchema(validateFlights), createFlights)
hotelsRouter.get('/flights', getFlights)

export default hotelsRouter
