const express = require('express')
const router = express.Router()
const controlador = require('../controladores/controladorClientes')
const { validadorCookie } = require('../middlewares/validadorCookie')

router.get('', validadorCookie, controlador.listClientes)
router.get('/:id', validadorCookie, controlador.getClientes)
router.post('', validadorCookie, controlador.createClientes)
router.post('/:id', validadorCookie, controlador.updateClientes)
router.delete('/:id', validadorCookie, controlador.deleteClientes)

module.exports = router;