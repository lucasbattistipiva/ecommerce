const Pedido = require('../models/Pedido');
const Estoque = require('../models/Estoque');


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




exports.criarPedido = async (req, res) => {
    const { clienteId, dataPedido, valorPedido, itens } = req.body;

    try {
        // Validação do estoque para os itens
        for (const item of itens) {
            const estoque = await Estoque.findOne({ where: { produtoId: item.codProduto } });

            if (!estoque) {
                return res.status(400).json({ message: `Produto não encontrado: ${item.nome}` });
            }

            if (estoque.quantidadeEstoque < item.quantidade) {
                return res.status(400).json({
                    message: `Estoque insuficiente para o produto: ${item.nome}`
                });
            }
        }

        // Criar o pedido
        const pedido = await Pedido.create({ clienteId, dataPedido, valorPedido });

        // Atualizar estoque para cada item do pedido
        for (const item of itens) {
            const estoque = await Estoque.findOne({ where: { produtoId: item.codProduto } });

            await estoque.update({
                quantidadeEstoque: estoque.quantidadeEstoque - item.quantidade
            });
        }

        res.status(201).json({ message: 'Pedido criado com sucesso!', pedido });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar pedido', details: error });
    }
};
