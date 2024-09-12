import express, { json } from 'express'
import cors from 'cors'
import { PORT } from './config.js'
import { AdminController } from './controller/admin.js'

const app = express()

app.use(json())
app.use(cors()) // TODO MEJORAR CORS

app.post('/admin/signup', AdminController.create)

app.listen(PORT, () => {
  console.log(`App listening on http://localhost:${PORT}`)
})
