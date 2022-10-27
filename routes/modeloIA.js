//Archivo unico para declarar rutas
const express = require('express')
const router = express.Router();
const modeloIAController = require('../controllers/modeloIA')

router.get('\FormularioImagen',modeloIAController.getFormularioImagen);
router.post('\Upload', modeloIAController.postUpload);

module.exports = router;
