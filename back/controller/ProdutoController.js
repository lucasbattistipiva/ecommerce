const { RAW } = require('sequelize/lib/query-types');
const Produto = require('../models/Produto');

// Função para criar um novo produto
exports.criarProduto = async (req, res) => {
    try {
        const dados = req.body;

        const novoProduto = await Produto.create(dados,{raw:true});

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
        const produto = await Produto.findByPk(req.params.id);
        if (!produto) return res.status(404).json({ message: 'produto não encontrado' });
        
        await produto.update(req.body);
        res.status(200).json(produto);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar produto', details: error });
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


