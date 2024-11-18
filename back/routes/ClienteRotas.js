const express = require('express');
const router = express.Router();
const clienteController = require('../controller/ClienteController');

router.post('/', clienteController.criarCliente);

router.get('/', clienteController.listarClientes);

router.get('/:id', clienteController.obterCliente);

router.put('/:id', clienteController.atualizarCliente);

router.delete('/:id', clienteController.excluirCliente);

module.exports = router;
