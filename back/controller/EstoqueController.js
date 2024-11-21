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

exports.validarEstoque = async (req, res) => {
    const carrinho = req.body;

    try {
        // Verifica se todos os itens do carrinho têm estoque suficiente
        for (const item of carrinho) {
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

        // Atualiza o estoque para cada item no carrinho
        for (const item of carrinho) {
            const estoque = await Estoque.findOne({ where: { produtoId: item.codProduto } });

            await estoque.update({
                quantidadeEstoque: estoque.quantidadeEstoque - item.quantidade
            });
        }

        res.status(200).json({ message: 'Compra finalizada com sucesso!' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao validar o estoque', details: error });
    }
};
