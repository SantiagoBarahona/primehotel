import { DDBBConnection } from './connection.js'

export class HotelModel {
  static async create ({ input, adminId }) {
    const query = 'INSERT INTO Hotel(name, address, phone, rating) VALUES (?, ?, ?, ?)'
    const values = [input.name, input.address, input.phone, input.rating]
    const [results] = await DDBBConnection.query(query, values)
    const insertID = results.insertId
    const query2 = 'INSERT INTO AdministratorXHotel(id_administrator, id_hotel) VALUES (?, ?)'
    const values2 = [adminId, insertID]
    await DDBBConnection.query(query2, values2)
  }

  static async getAll (adminId) {
    const query = ` 
    SELECT h.*
    FROM Hotel h
    JOIN AdministratorxHotel axh ON h.id = axh.id_hotel
    JOIN Administrator a ON axh.id_administrator = a.id
    WHERE a.id = ?;
    `
    const results = await DDBBConnection.execute(query, [adminId])
    return results[0]
  }

  static async getById (adminId, hotelId) {
    const query = `
    SELECT h.*
    FROM Hotel h
    JOIN AdministratorxHotel axh ON h.id = axh.id_hotel
    JOIN Administrator a ON axh.id_administrator = a.id
    WHERE a.id = ? AND h.id = ?;
    `
    const results = await DDBBConnection.execute(query, [adminId, hotelId])
    return results[0][0]
  }

  static async update (input) {
    const query = `
    UPDATE Hotel h
    JOIN AdministratorxHotel axh ON h.id = axh.id_hotel
    JOIN Administrator a ON axh.id_administrator = a.id
    SET h.name = ?,
    h.address = ?,
    h.phone = ?,
    h.rating = ?
    WHERE a.id = ?
    AND h.id = ?
    `
    await DDBBConnection.query(
      query,
      [
        input.name,
        input.address,
        input.phone,
        input.rating,
        input.adminId,
        input.hotelId
      ]
    )
  }

  static async delete (input) {
    const query = 'DELETE FROM Hotel where id = ?'
    await DDBBConnection.query(query, input.hotelId)
  }
}
