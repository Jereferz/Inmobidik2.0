const express = require('express');
const controlador = require('../Controladores/homeController.js');
const router = express.Router();

router.get('/', controlador.getHome);


module.exports = router;