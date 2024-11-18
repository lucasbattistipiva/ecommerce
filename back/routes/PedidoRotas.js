const express = require('express');
const router = express.Router();
const pedidoController = require('../controller/PedidoController');


router.post('/', pedidoController.criarPedido);

router.get('/', pedidoController.listarPedidos);

router.get('/:id', pedidoController.obterPedido);

router.put('/:id', pedidoController.atualizarPedido);

router.delete('/:id', pedidoController.excluirPedido);

module.exports = router;
