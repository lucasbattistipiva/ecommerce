const Estoque = require('../models/Estoque');

// Criar um novo estoque
exports.criarEstoque = async (req, res) => {
    try {
        const estoque = await Estoque.create(req.body);
        res.status(201).json(estoque);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar estoque', details: error });
    }
};

// Listar todos os estoques
exports.listarEstoques = async (req, res) => {
    try {
        const estoques = await Estoque.findAll();
        res.status(200).json(estoques);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao listar estoques', details: error });
    }
};

// Obter um estoque por ID
exports.obterEstoque = async (req, res) => {
    try {
        const estoque = await Estoque.findByPk(req.params.id);
        if (!estoque) return res.status(404).json({ message: 'Estoque não encontrado' });
        res.status(200).json(estoque);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao obter estoque', details: error });
    }
};

// Atualizar um estoque
exports.atualizarEstoque = async (req, res) => {
    try {
        const estoque = await Estoque.findByPk(req.params.id);
        if (!estoque) return res.status(404).json({ message: 'Estoque não encontrado' });
        
        await estoque.update(req.body);
        res.status(200).json(estoque);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar estoque', details: error });
    }
};

// Excluir um estoque
exports.excluirEstoque = async (req, res) => {
    try {
        const estoque = await Estoque.findByPk(req.params.id);
        if (!estoque) return res.status(404).json({ message: 'Estoque não encontrado' });
        
        await estoque.destroy();
        res.status(200).json({ message: 'Estoque excluído com sucesso' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao excluir estoque', details: error });
    }
};
