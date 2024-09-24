import { Router } from 'express'
import { handleRefreshToken } from '../controller/auth/refresh.js'
export const refreshRouter = Router()

refreshRouter.post('', handleRefreshToken)
