const express = require('express');
//const controlador = require('../Controladores/homeController.js');
const router = express.Router();

//router.get('/', controlador.getHome);

router.get('/home', (req, res) => res.render('home'));

router.get('/usuarios', (req, res) => res.render('usuarios'));
router.get('/home', (req, res) => res.render('home'));
router.get('/login', (req, res) => res.render('login'));

router.get('/about', (req, res) => res.render('about'));

//router.get('/', (req, res) => res.render('usuarios'));



module.exports = router;