const Cliente = require('../models/Cliente');

// Criar um novo cliente
exports.criarCliente = async (req, res) => {
    try {
        console.log(req.body)
        const cliente = await Cliente.create(req.body,{raw:true});
        res.status(201).json({message: "Cliente cadastrado com sucesso!"});
    } catch (error) {
       console.error(error)
        res.status(500).json({ error: 'Erro ao criar cliente', details: error });
    }
};

// Listar todos os clientes
exports.listarClientes = async (req, res) => {
    try {
        const clientes = await Cliente.findAll();
        res.status(200).json(clientes);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao listar clientes', details: error });
    }
};

// Obter um cliente por ID
exports.obterCliente = async (req, res) => {
    try {
        const cliente = await Cliente.findByPk(req.params.id);
        if (!cliente) return res.status(404).json({ message: 'Cliente não encontrado' });
        res.status(200).json(cliente);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao obter cliente', details: error });
    }
};

// Atualizar um cliente
exports.atualizarCliente = async (req, res) => {
    try {
        const cliente = await Cliente.findByPk(req.params.id);
        if (!cliente) return res.status(404).json({ message: 'Cliente não encontrado' });
        
        await cliente.update(req.body);
        res.status(200).json(cliente);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar cliente', details: error });
    }
};

// Excluir um cliente
exports.excluirCliente = async (req, res) => {
    try {
        const cliente = await Cliente.findByPk(req.params.id);
        if (!cliente) return res.status(404).json({ message: 'Cliente não encontrado' });
        
        await cliente.destroy();
        res.status(200).json({ message: 'Cliente excluído com sucesso' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao excluir cliente', details: error });
    }
};
