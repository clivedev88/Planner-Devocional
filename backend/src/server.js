require('dotenv').config();
const express = require('express')

const app = express();
const PORT = process.env.PORT || 3000;

const cors = require('cors');
require("./config/db.ts");

app.use(cors({
  origin: 'http://localhost:5174',
  credentials: true
}));


app.use(express.json());
app.use('/', require('./routes/PlanRoutes'));

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
})