const express = require('express');
//const controlador = require('../Controladores/homeController.js');
const router = express.Router();

//router.get('/', controlador.getHome);

router.get('/home', (req, res) => res.render('home'));

router.get('/usuarios', (req, res) => res.render('usuarios'));
router.get('/home', (req, res) => res.render('home'));
router.get('/login', (req, res) => res.render('login'));

router.get('/about', (req, res) => res.render('about'));
router.get('/alquilerDepartamento', (req,res) => res.render('alquilerDepartamento'));

router.get('/alquilerCasa', (req,res) => res.render('alquilerCasas'));
router.get('/alquilerSalon', (req,res) => res.render('alquilerSalon'));

router.get('/login', (req, res) => res.render('login'));
router.get('/register', (req, res) => res.render('register'));
router.get('/comprarDepto', (req,res) => res.render('comprarDepto'));



//router.get('/', (req, res) => res.render('usuarios'));



module.exports = router;