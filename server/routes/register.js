import { Router } from 'express'
import { AdminController } from '../controller/admin.js'
export const registerRouter = Router()

registerRouter.post('/admin', AdminController.create)
