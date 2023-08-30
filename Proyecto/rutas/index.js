const express = require("express");
const router = express.Router();

const homeController = require("../Controladores/homeController");

router.post('/ruta', (req, res) => {
    // Lógica para manejar la solicitud POST
    // Puede incluir la validación de datos, el almacenamiento en la base de datos, etc.
    res.send('Solicitud POST recibida correctamente');
});

module.exports = router;