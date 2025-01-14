import path from 'path'
import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'
import userRoutes from './routes/user.js'
import { errorHandler, notFound } from './middleware/errorMiddleware.js'

dotenv.config()

// connect to database
connectDB()

const app = express()

// Body parser
app.use(express.json())

// API routes
app.use('/api/user', userRoutes)

// deployment configuration
const __dirname = path.resolve()

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/front-end/build')))

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'front-end', 'build', 'index.html'))
  )
}

// Middleware
app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port http://localhost:${PORT}`
      .yellow.bold
  )
)