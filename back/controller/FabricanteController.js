const Fabricante = require('../models/Fabricante');

// Criar um novo fabricante
exports.criarFabricante = async (req, res) => {
    try {
        const fabricante = await Fabricante.create(req.body);
        res.status(201).json(fabricante);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar fabricante', details: error });
    }
};

// Listar todos os fabricantes
exports.listarFabricantes = async (req, res) => {
    try {
        const fabricantes = await Fabricante.findAll();
        res.status(200).json(fabricantes);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao listar fabricantes', details: error });
    }
};

// Obter um fabricante por ID
exports.obterFabricante = async (req, res) => {
    try {
        const fabricante = await Fabricante.findByPk(req.params.id);
        if (!fabricante) return res.status(404).json({ message: 'Fabricante não encontrado' });
        res.status(200).json(fabricante);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao obter fabricante', details: error });
    }
};

// Atualizar um fabricante
exports.atualizarFabricante = async (req, res) => {
    try {
        const fabricante = await Fabricante.findByPk(req.params.id);
        if (!fabricante) return res.status(404).json({ message: 'Fabricante não encontrado' });
        
        await fabricante.update(req.body);
        res.status(200).json(fabricante);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar fabricante', details: error });
    }
};

// Excluir um fabricante
exports.excluirFabricante = async (req, res) => {
    try {
        const fabricante = await Fabricante.findByPk(req.params.id);
        if (!fabricante) return res.status(404).json({ message: 'Fabricante não encontrado' });
        
        await fabricante.destroy();
        res.status(200).json({ message: 'Fabricante excluído com sucesso' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao excluir fabricante', details: error });
    }
};
