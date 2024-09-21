import mysql from 'mysql2/promise.js'

const config = {
  host: 'localhost',
  user: 'root',
  password: 'daniela123',
  database: 'Primehotel'
}

export const DDBBConnection = await mysql.createConnection(config)
