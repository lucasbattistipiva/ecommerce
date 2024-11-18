const express = require('express');
const router = express.Router();
const estoqueController = require('../controller/EstoqueController');

router.post('/', estoqueController.criarEstoque);

router.get('/', estoqueController.listarEstoques);

router.get('/:id', estoqueController.obterEstoque);

router.put('/:id', estoqueController.atualizarEstoque);

router.delete('/:id', estoqueController.excluirEstoque);

module.exports = router;
