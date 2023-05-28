import express from 'express'
import { validateSchema } from '../middlewares/validateSchema.js'
import validateAmenities from '../schemas/amenities.Schema.js'
import {
  createAmenities,
  getAmenities
} from '../controllers/amenities.Controllers.js'

const amenitiesRouter = express.Router()

amenitiesRouter.post(
  '/amenities',
  validateSchema(validateAmenities),
  createAmenities
)
amenitiesRouter.get('/amenities', getAmenities)

export default amenitiesRouter
