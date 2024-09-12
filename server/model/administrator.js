import { connectToDDBB } from './connection.js'

export class AdministratorModel {
  static async create ({ input }) {
    const connection = await connectToDDBB()
    console.log(connection)
    const query = 'INSERT INTO Administrator(name, lastname, email, password, prefix, cellphone, birthdate) VALUES (?, ?, ?, ?, ?, ?, ?)'
    const values = [input.name, input.lastname, input.email, input.password, input.prefix, input.cellphone, input.birthdate]
    return await connection.query(query, values).then(() => connection.end())
  }
}
