const express = require('express');
const router = express.Router();
const pagamentoController = require('../controller/PagamentoController');

router.post('/', pagamentoController.criarPagamento);

router.get('/', pagamentoController.listarPagamentos);

router.get('/:id', pagamentoController.obterPagamento);

router.put('/:id', pagamentoController.atualizarPagamento);

router.delete('/:id', pagamentoController.excluirPagamento);

module.exports = router;
