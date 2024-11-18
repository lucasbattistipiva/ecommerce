const express = require('express');
const router = express.Router();
const produtoController = require('../controller/ProdutoController');


router.post('/', produtoController.criarProduto);

router.get('/', produtoController.listarProdutos);

router.get('/:id', produtoController.obterProduto);

router.put('/:id', produtoController.atualizarProduto);

router.delete('/:id', produtoController.excluirProduto);

module.exports = router;
