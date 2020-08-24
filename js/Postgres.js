const { Pool } = require('pg');

const pool = new Pool({
  database: 'basededatos',
  user: 'postgres',
  host: 'localhost',
  password: 'k3v1n020299jhosepct',
  port: 5432
});

const client = async (req, res) =>{
  const response = await pool.query('SELECT * FROM covidperu');
  console.log(response.rows);
  res.send('covidperu');
}