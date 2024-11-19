const Cliente = require('../models/clientes'); 

// Função para criar um novo cliente
exports.criarCliente = async (req, res) => {
    try {
        const { nome, cpf, endereco } = req.body; // Pegando os dados do corpo da requisição

        // Verificar se todos os campos obrigatórios foram fornecidos
        if (!nome || !cpf) {
            return res.status(400).json({ message: 'Nome e CPF são obrigatórios' });
        }

        // Criação do cliente no banco de dados
        const novoCliente = await Cliente.create({ nome, cpf, endereco });

        // Retornando o cliente criado com status 201 (Created)
        res.status(201).json(novoCliente);
    } catch (error) {
        // Em caso de erro, retornamos uma mensagem de erro
        console.error(error);
        res.status(500).json({ message: 'Erro ao criar cliente', error });
    }
};

// Função para obter todos os clientes
exports.obterClientes = async (req, res) => {
    try {
        const clientes = await Cliente.findAll(); // Buscar todos os clientes no banco

        if (clientes.length === 0) {
            return res.status(404).json({ message: 'Nenhum cliente encontrado' });
        }

        // Retornando os clientes encontrados com status 200 (OK)
        res.status(200).json(clientes);
    } catch (error) {
        // Em caso de erro, retornamos uma mensagem de erro
        console.error(error);
        res.status(500).json({ message: 'Erro ao obter clientes', error });
    }
};

// Função para atualizar um cliente
exports.atualizarCliente = async (req, res) => {
    try {
        const { id } = req.params; // Pegando o id da URL
        const { nome, cpf, endereco } = req.body; // Pegando os dados do corpo da requisição

        // Encontrando o cliente pelo id
        const cliente = await Cliente.findByPk(id);

        if (!cliente) {
            return res.status(404).json({ message: 'Cliente não encontrado' });
        }

        // Atualizando os dados do cliente
        cliente.nome = nome || cliente.nome;  // Mantém o valor atual se não for fornecido
        cliente.cpf = cpf || cliente.cpf; // Mantém o valor atual se não for fornecido
        cliente.endereco = endereco || cliente.endereco; // Mantém o valor atual se não for fornecido

        // Salvando as mudanças no banco de dados
        await cliente.save();

        // Retornando o cliente atualizado
        res.status(200).json(cliente);
    } catch (error) {
        // Em caso de erro, retornamos uma mensagem de erro
        console.error(error);
        res.status(500).json({ message: 'Erro ao atualizar cliente', error });
    }
};

// Função para deletar um cliente
exports.deletarCliente = async (req, res) => {
    try {
        const { id } = req.params; // Pegando o id da URL

        // Encontrando o cliente pelo id
        const cliente = await Cliente.findByPk(id);

        if (!cliente) {
            return res.status(404).json({ message: 'Cliente não encontrado' });
        }

        // Deletando o cliente
        await cliente.destroy();

        // Retornando resposta sem conteúdo (status 204)
        res.status(204).send();
    } catch (error) {
        // Em caso de erro, retornamos uma mensagem de erro
        console.error(error);
        res.status(500).json({ message: 'Erro ao deletar cliente', error });
    }
};
