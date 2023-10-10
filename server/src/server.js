const express = require('express');
const cors = require('cors');

//rutas mercado pago
const Mercado_Pago = require('./routes/Mercadopago');


const server = express();

server.use(express.json());
server.use(cors());



//rutas
server.use("/Mercado_Pago", Mercado_Pago);

module.exports = server;
