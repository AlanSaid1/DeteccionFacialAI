//2 RUTAS
const express = require('express');
const router = express.Router();
const ejemploBDController = require('../controllers/ejemploBD')

//mostrar  los registros (SELECT * FROM Usuario)
router.get('/mostrarUsuarios', ejemploBDController.getUsuarios);

//Agregar registro (INSERT into usuario VALUES();)
router.post('/agregarUsuario', ejemploBDController.postAgregarUsuario);

module.exports = router;