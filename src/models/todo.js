import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const connectionString = {
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD
}
const pool = new pg.Pool(connectionString);

pool.on('connect', () => {})

const createTable = async () => {
  const query = `CREATE TABLE IF NOT EXISTS
  todos(id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    created_at DATE NOT NULL,
    completed BOOLEAN NOT NULL)`;

  try {
    await pool.query(query);
    console.log('table created');
  } catch (e) {
    console.log(e)
    pool.end();
  }
}


createTable();

export default pool;