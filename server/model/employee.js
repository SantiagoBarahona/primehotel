import { DDBBConnection } from './connection.js'

export class EmployeeModel {
  static async getAll (hotelId) {
    const [rows] = await DDBBConnection.execute('CALL GetEmployeesByHotel(?)', [hotelId])
    return rows[0]
  }
}
