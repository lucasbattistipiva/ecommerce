const express = require('express');
const router = express.Router();
const estoqueController = require('../controller/EstoqueController');

router.post('/', estoqueController.criarEstoque);

router.post('/validar', estoqueController.validarEstoque);

router.get('/', estoqueController.listarEstoques);

router.get('/:id', estoqueController.obterEstoque);

router.put('/:id', estoqueController.atualizarEstoque);

router.delete('/:id', estoqueController.excluirEstoque);


module.exports = router;
