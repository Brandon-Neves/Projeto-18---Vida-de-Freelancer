import express from 'express'
import { validateSchema } from '../middlewares/validateSchema.js'
import validateHotels from '../schemas/hotels.Schema.js'
import {
  createHotels,
  getHotels
} from '../controllers/hotels.Controller.js'

const hotelsRouter = express.Router()

hotelsRouter.post(
  '/hotels',
  validateSchema(validateHotels),
  createHotels
)
hotelsRouter.get('/hotels', getHotels)

export default hotelsRouter
