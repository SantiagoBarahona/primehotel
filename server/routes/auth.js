import { Router } from 'express'
import { handleAdminLogin } from '../controller/auth/admin.js'
export const authRouter = Router()

authRouter.post('/admin', handleAdminLogin)
