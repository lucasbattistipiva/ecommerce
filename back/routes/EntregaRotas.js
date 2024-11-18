const express = require('express');
const router = express.Router();
const entregaController = require('../controller/EntregaController');

router.post('/', entregaController.criarEntrega);

router.get('/', entregaController.listarEntregas);

router.get('/:id', entregaController.obterEntrega);

router.put('/:id', entregaController.atualizarEntrega);

router.delete('/:id', entregaController.excluirEntrega);

module.exports = router;
