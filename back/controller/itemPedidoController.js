const ItemPedido = require('../models/ItemPedido');

// Criar um novo item de pedido
exports.criarItemPedido = async (req, res) => {
    try {
        const itemPedido = await ItemPedido.create(req.body);
        res.status(201).json(itemPedido);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar item de pedido', details: error });
    }
};

// Listar todos os itens de pedido
exports.listarItensPedido = async (req, res) => {
    try {
        const itensPedido = await ItemPedido.findAll();
        res.status(200).json(itensPedido);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao listar itens de pedido', details: error });
    }
};

// Obter um item de pedido por ID
exports.obterItemPedido = async (req, res) => {
    try {
        const itemPedido = await ItemPedido.findByPk(req.params.id);
        if (!itemPedido) return res.status(404).json({ message: 'Item de pedido não encontrado' });
        res.status(200).json(itemPedido);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao obter item de pedido', details: error });
    }
};

// Atualizar um item de pedido
exports.atualizarItemPedido = async (req, res) => {
    try {
        const itemPedido = await ItemPedido.findByPk(req.params.id);
        if (!itemPedido) return res.status(404).json({ message: 'Item de pedido não encontrado' });
        
        await itemPedido.update(req.body);
        res.status(200).json(itemPedido);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar item de pedido', details: error });
    }
};

// Excluir um item de pedido
exports.excluirItemPedido = async (req, res) => {
    try {
        const itemPedido = await ItemPedido.findByPk(req.params.id);
        if (!itemPedido) return res.status(404).json({ message: 'Item de pedido não encontrado' });
        
        await itemPedido.destroy();
        res.status(200).json({ message: 'Item de pedido excluído com sucesso' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao excluir item de pedido', details: error });
    }
};
