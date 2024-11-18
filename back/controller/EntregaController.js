const Entrega = require('../models/Entrega');

// Criar uma nova entrega
exports.criarEntrega = async (req, res) => {
    try {
        const entrega = await Entrega.create(req.body);
        res.status(201).json(entrega);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar entrega', details: error });
    }
};

// Listar todas as entregas
exports.listarEntregas = async (req, res) => {
    try {
        const entregas = await Entrega.findAll();
        res.status(200).json(entregas);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao listar entregas', details: error });
    }
};

// Obter uma entrega por ID
exports.obterEntrega = async (req, res) => {
    try {
        const entrega = await Entrega.findByPk(req.params.id);
        if (!entrega) return res.status(404).json({ message: 'Entrega não encontrada' });
        res.status(200).json(entrega);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao obter entrega', details: error });
    }
};

// Atualizar uma entrega
exports.atualizarEntrega = async (req, res) => {
    try {
        const entrega = await Entrega.findByPk(req.params.id);
        if (!entrega) return res.status(404).json({ message: 'Entrega não encontrada' });
        
        await entrega.update(req.body);
        res.status(200).json(entrega);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar entrega', details: error });
    }
};

// Excluir uma entrega
exports.excluirEntrega = async (req, res) => {
    try {
        const entrega = await Entrega.findByPk(req.params.id);
        if (!entrega) return res.status(404).json({ message: 'Entrega não encontrada' });
        
        await entrega.destroy();
        res.status(200).json({ message: 'Entrega excluída com sucesso' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao excluir entrega', details: error });
    }
};
