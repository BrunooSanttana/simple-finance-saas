const express = require('express');
const cors = require('cors');

const app = express();

// Middlewares globais
app.use(cors());
app.use(express.json());

// Rota de saúde
app.get('/health', (req, res) => {
  return res.status(200).json({ status: 'API OK' });
});

module.exports = app;
