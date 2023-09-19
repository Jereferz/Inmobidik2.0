const express = require('express');
//const controlador = require('../Controladores/homeController.js');
const router = express.Router();

//router.get('/', controlador.getHome);
router.get('/usuarios', (req, res) => res.render('usuarios'));
router.get('/home', (req, res) => res.render('home'));
router.get('/login', (req, res) => res.render('login'));

module.exports = router;