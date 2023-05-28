import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import citiesRouter from './routes/cities.routes.js'
import airlinesRouter from './routes/airlines.routes.js'
import hotelsRouter from './routes/hotels.routes.js'
import amenitiesRouter from './routes/amenties.routes.js'
import imagesRouter from './routes/images.routes.js'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

app.use([
  citiesRouter,
  airlinesRouter,
  hotelsRouter,
  amenitiesRouter,
  imagesRouter
])

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server ir running ${PORT}`)
})
