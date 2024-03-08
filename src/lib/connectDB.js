import mysql from 'mysql2/promise';

export const JWTKEY = '07831505';

export const connectDB = () => {
  return mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  })
}

