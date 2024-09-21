import { connectionConfig } from './config.js'
import mysql from 'mysql2/promise.js'
import bcrypt from 'bcrypt'

class EmailDoesntExistsError extends Error {
  constructor (message) {
    super(message)
    this.name = "Email doesn't exits"
  }
}

class InvalidPasswordError extends Error {
  constructor (message) {
    super(message)
    this.name = 'Invalid password!'
  }
}

export class AdminModel {
  static async create ({ input }) {
    const connection = await mysql.createConnection(connectionConfig)
    const query = 'INSERT INTO Administrator(name, lastname, email, password, prefix, cellphone, birthdate) VALUES (?, ?, ?, ?, ?, ?, ?)'
    const values = [input.name, input.lastname, input.email, input.password, input.prefix, input.cellphone, input.birthdate]
    return await connection.query(query, values)
  }

  static async login ({ email, password }) {
    const connection = await mysql.createConnection(connectionConfig)
    const query = 'SELECT * FROM Administrator WHERE email = ?'
    const [rows] = await connection.execute(query, [email])
    if (!rows.length > 0) throw new EmailDoesntExistsError('Email doesnt exists')
    const hashedPassword = rows[0].password
    const valid = await bcrypt.compare(password, hashedPassword)
    if (!valid) throw new InvalidPasswordError('Invalid password')
    const { password: _, ...publicUser } = rows[0]
    return publicUser
  }
}
