const Produto = require('../models/Produto');

// Função para criar um novo produto
exports.criarProduto = async (req, res) => {
    try {
        const { fabricanteId, nomeProduto, quantidadeProduto, precoProduto, descricaoProduto } = req.body;

        const novoProduto = await Produto.create({
            fabricanteId,
            nomeProduto,
            quantidadeProduto,
            precoProduto,
            descricaoProduto
        });

        return res.status(201).json({message:"Produto cadastrada com sucesso"});
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao criar o produto' });
    }
};

// Função para listar todos os produtos
exports.listarProdutos = async (req, res) => {
    try {
        const produtos = await Produto.findAll();
        return res.status(200).json(produtos);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao listar os produtos' });
    }
};

// Função para obter um produto pelo ID
exports.obterProduto = async (req, res) => {
    try {
        const { id } = req.params;
        const produto = await Produto.findByPk(id);

        if (!produto) {
            return res.status(404).json({ message: 'Produto não encontrado' });
        }

        return res.status(200).json(produto);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao obter o produto' });
    }
};

// Função para atualizar um produto
exports.atualizarProduto = async (req, res) => {
    try {
        const { id } = req.params;
        const { fabricanteId, nomeProduto, quantidadeProduto, precoProduto, descricaoProduto } = req.body;

        const produto = await Produto.findByPk(id);

        if (!produto) {
            return res.status(404).json({ message: 'Produto não encontrado' });
        }

        produto.fabricanteId = fabricanteId || produto.fabricanteId;
        produto.nomeProduto = nomeProduto || produto.nomeProduto;
        produto.quantidadeProduto = quantidadeProduto || produto.quantidadeProduto;
        produto.precoProduto = precoProduto || produto.precoProduto;
        produto.descricaoProduto = descricaoProduto || produto.descricaoProduto;

        await produto.save();

        return res.status(200).json(produto);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao atualizar o produto' });
    }
};

// Função para excluir um produto
exports.excluirProduto = async (req, res) => {
    try {
        const { id } = req.params;

        const produto = await Produto.findByPk(id);

        if (!produto) {
            return res.status(404).json({ message: 'Produto não encontrado' });
        }

        await produto.destroy();

        return res.status(200).json({ message: 'Produto excluído com sucesso' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao excluir o produto' });
    }
};


