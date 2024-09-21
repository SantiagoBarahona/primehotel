import express, { json, urlencoded } from 'express'
import cors from 'cors'
import { PORT, WEB_APP_URL } from './config.js'
import { verifyJWT } from './middleware/verifyJWT.js'
import cookieParser from 'cookie-parser'
import { adminRouter } from './routes/admin.js'
import { hotelRouter } from './routes/hotel.js'
import { authRouter } from './routes/auth.js'
import { registerRouter } from './routes/register.js'
import { refreshRouter } from './routes/refresh.js'

const app = express()

app.use(json())
app.use(cors({
  origin: [
    'http://localhost:3000',
    WEB_APP_URL,
    `${WEB_APP_URL}/admin`
  ],
  credentials: true
})) // TODO MEJORAR CORS
app.use(urlencoded()) // TODO DELETE THIS
app.use(cookieParser())
app.use('/register', registerRouter)
app.use('/auth', authRouter)
app.use('/refresh', refreshRouter)

// REQUIRES AUTHORIZATION
app.use(verifyJWT)
app.use('/admin', adminRouter)
app.use('/hotel', hotelRouter)

app.listen(PORT, () => {
  console.log(`App listening on http://localhost:${PORT}`)
})
