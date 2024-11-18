const Reabastecimento = require('../models/Reabastecimento');

// Criar um novo reabastecimento
exports.criarReabastecimento = async (req, res) => {
    try {
        const reabastecimento = await Reabastecimento.create(req.body);
        res.status(201).json(reabastecimento);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar reabastecimento', details: error });
    }
};

// Listar todos os reabastecimentos
exports.listarReabastecimentos = async (req, res) => {
    try {
        const reabastecimentos = await Reabastecimento.findAll();
        res.status(200).json(reabastecimentos);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao listar reabastecimentos', details: error });
    }
};

// Obter um reabastecimento por ID
exports.obterReabastecimento = async (req, res) => {
    try {
        const reabastecimento = await Reabastecimento.findByPk(req.params.id);
        if (!reabastecimento) return res.status(404).json({ message: 'Reabastecimento não encontrado' });
        res.status(200).json(reabastecimento);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao obter reabastecimento', details: error });
    }
};

// Atualizar um reabastecimento
exports.atualizarReabastecimento = async (req, res) => {
    try {
        const reabastecimento = await Reabastecimento.findByPk(req.params.id);
        if (!reabastecimento) return res.status(404).json({ message: 'Reabastecimento não encontrado' });
        
        await reabastecimento.update(req.body);
        res.status(200).json(reabastecimento);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar reabastecimento', details: error });
    }
};

// Excluir um reabastecimento
exports.excluirReabastecimento = async (req, res) => {
    try {
        const reabastecimento = await Reabastecimento.findByPk(req.params.id);
        if (!reabastecimento) return res.status(404).json({ message: 'Reabastecimento não encontrado' });
        
        await reabastecimento.destroy();
        res.status(200).json({ message: 'Reabastecimento excluído com sucesso' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao excluir reabastecimento', details: error });
    }
};
