const Pedido = require('../models/Pedido');

// Criar um novo pedido
exports.criarPedido = async (req, res) => {
    try {
        const pedido = await Pedido.create(req.body);
        res.status(201).json(pedido);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar pedido', details: error });
    }
};

// Listar todos os pedidos
exports.listarPedidos = async (req, res) => {
    try {
        const pedidos = await Pedido.findAll();
        res.status(200).json(pedidos);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao listar pedidos', details: error });
    }
};

// Obter um pedido por ID
exports.obterPedido = async (req, res) => {
    try {
        const pedido = await Pedido.findByPk(req.params.id);
        if (!pedido) return res.status(404).json({ message: 'Pedido não encontrado' });
        res.status(200).json(pedido);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao obter pedido', details: error });
    }
};

// Atualizar um pedido
exports.atualizarPedido = async (req, res) => {
    try {
        const pedido = await Pedido.findByPk(req.params.id);
        if (!pedido) return res.status(404).json({ message: 'Pedido não encontrado' });
        
        await pedido.update(req.body);
        res.status(200).json(pedido);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar pedido', details: error });
    }
};

// Excluir um pedido
exports.excluirPedido = async (req, res) => {
    try {
        const pedido = await Pedido.findByPk(req.params.id);
        if (!pedido) return res.status(404).json({ message: 'Pedido não encontrado' });
        
        await pedido.destroy();
        res.status(200).json({ message: 'Pedido excluído com sucesso' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao excluir pedido', details: error });
    }
};
