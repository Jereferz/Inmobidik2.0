const express = require("express");
require('dotenv').config();
const morgan = require('morgan');
const route = require('./rutas/vistas.js');
const path = require('path');

// const  conn = require("express-myconnection");

const app = express();



app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
const PORT = process.env.PORT || 3001;

app.set('views', path.join(__dirname,'Vistas'));
app.set('view engine', 'ejs');

app.use(route);

app.listen(PORT, () =>{
    console.log(`escuchando puerto ${PORT}`);
});
