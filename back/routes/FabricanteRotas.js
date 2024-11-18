const express = require('express');
const router = express.Router();
const fabricanteController = require('../controller/FabricanteController');

router.post('/', fabricanteController.criarFabricante);

router.get('/', fabricanteController.listarFabricantes);

router.get('/:id', fabricanteController.obterFabricante);

router.put('/:id', fabricanteController.atualizarFabricante);

router.delete('/:id', fabricanteController.excluirFabricante);

module.exports = router;
