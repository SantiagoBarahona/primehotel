import { DDBBConnection } from './connection.js'

export class HotelModel {
  static async create ({ input }) {
    const query = 'INSERT INTO Hotel(name) VALUES (?)'
    const values = [input.name]
    const [results] = await DDBBConnection.query(query, values)
    const insertID = results.insertId
    const query2 = 'INSERT INTO AdministratorXHotel(id_administrator, id_hotel)'
  }
}
