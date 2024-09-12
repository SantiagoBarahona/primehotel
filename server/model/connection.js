import mysql from 'mysql2/promise.js'

export async function connectToDDBB () {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'daniela123',
    database: 'Primehotel'
  })

  await connection.connect((error) => {
    if (error) {
      console.log('Error during mysql connection:', error.message)
    } else {
      console.log('Connected to mysql!')
    }
  })

  return connection
}
