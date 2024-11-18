const Pagamento = require('../models/Pagamento');

// Criar um novo pagamento
exports.criarPagamento = async (req, res) => {
    try {
        const pagamento = await Pagamento.create(req.body);
        res.status(201).json(pagamento);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar pagamento', details: error });
    }
};

// Listar todos os pagamentos
exports.listarPagamentos = async (req, res) => {
    try {
        const pagamentos = await Pagamento.findAll();
        res.status(200).json(pagamentos);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao listar pagamentos', details: error });
    }
};

// Obter um pagamento por ID
exports.obterPagamento = async (req, res) => {
    try {
        const pagamento = await Pagamento.findByPk(req.params.id);
        if (!pagamento) return res.status(404).json({ message: 'Pagamento não encontrado' });
        res.status(200).json(pagamento);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao obter pagamento', details: error });
    }
};

// Atualizar um pagamento
exports.atualizarPagamento = async (req, res) => {
    try {
        const pagamento = await Pagamento.findByPk(req.params.id);
        if (!pagamento) return res.status(404).json({ message: 'Pagamento não encontrado' });
        
        await pagamento.update(req.body);
        res.status(200).json(pagamento);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar pagamento', details: error });
    }
};

// Excluir um pagamento
exports.excluirPagamento = async (req, res) => {
    try {
        const pagamento = await Pagamento.findByPk(req.params.id);
        if (!pagamento) return res.status(404).json({ message: 'Pagamento não encontrado' });
        
        await pagamento.destroy();
        res.status(200).json({ message: 'Pagamento excluído com sucesso' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao excluir pagamento', details: error });
    }
};
