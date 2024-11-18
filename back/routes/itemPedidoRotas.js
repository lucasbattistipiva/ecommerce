const express = require('express');
const router = express.Router();
const itemPedidoController = require('../controller/itemPedidoController');

router.post('/', itemPedidoController.criarItemPedido);

router.get('/', itemPedidoController.listarItensPedido);

router.get('/:id', itemPedidoController.obterItemPedido);

router.put('/:id', itemPedidoController.atualizarItemPedido);

router.delete('/:id', itemPedidoController.excluirItemPedido);

module.exports = router;
