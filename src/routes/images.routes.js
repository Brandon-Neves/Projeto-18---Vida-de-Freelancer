import express from 'express'
import { validateSchema } from '../middlewares/validateSchema.js'
import validateImages from '../schemas/images.Schema.js'
import {
  createImages,
  getImages
} from '../controllers/images.Controller.js'

const imagesRouter = express.Router()

imagesRouter.post(
  '/hotels',
  validateSchema(validateImages),
  createImages
)
imagesRouter.get('/hotels', getImages)

export default imagesRouter
