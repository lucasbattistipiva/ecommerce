const express = require('express');
const router = express.Router();
const reabastecimentoController = require('../controller/ReabastecimentoController');

router.post('/', reabastecimentoController.criarReabastecimento);


router.get('/', reabastecimentoController.listarReabastecimentos);


router.get('/:id', reabastecimentoController.obterReabastecimento);


router.put('/:id', reabastecimentoController.atualizarReabastecimento);


router.delete('/:id', reabastecimentoController.excluirReabastecimento);

module.exports = router;
