const express = require('express');
//const controlador = require('../Controladores/homeController.js');
const router = express.Router();

//router.get('/', controlador.getHome);
router.get('/usuarios', (req, res) => res.render('usuarios'));

module.exports = router;