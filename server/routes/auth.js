import { Router } from 'express'
import { handleAdminLogin } from '../controller/auth/admin-login.js'
export const authRouter = Router()

authRouter.post('/admin', handleAdminLogin)
