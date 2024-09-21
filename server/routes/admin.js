import { Router } from 'express'
import { AdminController } from '../controller/admin.js'
export const adminRouter = Router()

adminRouter.post('', AdminController.create)
