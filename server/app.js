import express, { json } from 'express'
import cors from 'cors'
import { PORT } from './config.js'
import { AdministratorController } from './controller/administrator.js'

const app = express()

app.use(json())
app.use(cors()) // TODO MEJORAR CORS

app.post('/admin/signup', AdministratorController.create)

app.listen(PORT, () => {
  console.log(`App listening on http://localhost:${PORT}`)
})
