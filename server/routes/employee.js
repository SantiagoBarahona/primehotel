import { Router } from 'express'
import { EmployeeController } from '../controller/employee.js'
export const employeeRouter = Router()

employeeRouter.get('', EmployeeController.getAll)
