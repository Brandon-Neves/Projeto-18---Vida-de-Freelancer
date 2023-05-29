import express from 'express'
import { validateSchema } from '../middlewares/validateSchema.js'
import validateFlights from '../schemas/flights.Schema.js'
import {
  createFlights,
  getFlightsCityId,
  getFlightsId
} from '../controllers/flights.Controller.js'

const flightsRouter = express.Router()

flightsRouter.post('/flights', validateSchema(validateFlights), createFlights)
flightsRouter.get('/flights/city/:id', getFlightsCityId)
flightsRouter.get('/flights/:id', getFlightsId)

export default flightsRouter
