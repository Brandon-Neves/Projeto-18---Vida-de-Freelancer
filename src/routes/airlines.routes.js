import express from 'express'
import { validateSchema } from '../middlewares/validateSchema.js'
import validateAirlines from '../schemas/airlines.Schema.js'
import {
  createAirlines,
  getAirlines
} from '../controllers/airlines.Controller.js'

const airlinesRouter = express.Router()

airlinesRouter.post(
  '/airlines',
  validateSchema(validateAirlines),
  createAirlines
)
airlinesRouter.get('/airlines', getAirlines)

export default airlinesRouter
