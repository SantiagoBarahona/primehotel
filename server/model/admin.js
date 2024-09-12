import { connectionConfig } from './config.js'
import mysql from 'mysql2/promise.js'

export class AdminModel {
  static async create ({ input }) {
    const connection = await mysql.createConnection(connectionConfig)
    const query = 'INSERT INTO Administrator(name, lastname, email, password, prefix, cellphone, birthdate) VALUES (?, ?, ?, ?, ?, ?, ?)'
    const values = [input.name, input.lastname, input.email, input.password, input.prefix, input.cellphone, input.birthdate]
    return await connection.query(query, values)
  }
}
