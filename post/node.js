const express = require('express');
const { Pool } = require('pg');

const app = express();

// PostgreSQL bilan bog'lanish sozlamalari
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: '11111111',
  port: 5432, // PostgreSQL porti
});

app.get('/', async (req, res) => {
  try {
    // PostgreSQL dan ma'lumotlarni olish
    const result = await pool.query('SELECT * FROM sizning_jadvalingiz');
    const data = result.rows;

    // Olingan ma'lumotlarni veb-saytingizga qaytarish
    res.send(data);
  } catch (error) {
    console.error('Xatolik:', error);
    res.status(500).send('Serverda xatolik yuz berdi');
  }
});

// Serverni eshitish uchun portni tanlash
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server ishga tushdi: file:///C:/zuqilash/template/index.html:${PORT}`);
});
