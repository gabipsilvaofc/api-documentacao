const express = require('express')
const router = express.Router()
const controlador = require('../controladores/controladorProdutos')
const { validadorCookie } = require('../middlewares/validadorCookie')

router.get('', validadorCookie, controlador.listProdutos)
router.get('/:id', validadorCookie, controlador.getProduto)
router.post('', validadorCookie, controlador.createProduto)
router.post('/:id', validadorCookie, controlador.updateProduto)
router.delete('/:id', validadorCookie, controlador.deleteProduto)

module.exports = router;