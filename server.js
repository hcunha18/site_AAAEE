import dotenv from 'dotenv';
dotenv.config();

import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Variáveis de ambiente:<br>' + JSON.stringify(process.env));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
});