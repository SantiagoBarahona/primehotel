import { EmployeeModel } from '../model/employee.js'

export class EmployeeController {
  static async getAll (req, res) {
    const { hotelId } = req.query
    console.log(req.query)
    try {
      const employees = await EmployeeModel.getAll(hotelId)
      console.log(employees)
      res.json(employees)
    } catch (err) {
      console.log(err)
      res.status(400).send({ error: 'Something went wrong!' })
    }
  }
}
