const express = require("express");
require('dotenv').config();
const morgan = require('morgan');
const route = require('./rutas/index.js');

// const  conn = require("express-myconnection");

const app = express();
const path = require('path');


app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
const PORT = process.env.PORT || 3001;


app.use("/", route);
app.listen(PORT, () =>{
    console.log(`escuchando puerto ${PORT}`);
});
