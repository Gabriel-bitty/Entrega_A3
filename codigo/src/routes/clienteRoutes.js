const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

// Rota para criar um novo cliente
router.post('/', clienteController.criarCliente);

// Rota para obter todos os clientes
router.get('/', clienteController.obterClientes);

// Rota para buscar clientes pelo nome
router.get('/nome/:nome', clienteController.obterClientesPorNome); 

// Rota para obter clientes pelo CPF
router.get('/cpf/:cpf', clienteController.obterClientesPorCpf);

// Rota para obter clientes pelo Id
router.get('/id/:id', clienteController.obterclientePorId);

// Rota para atualizar um cliente por ID
router.put('/id/:id', clienteController.atualizarClientePorId); 

// Rota para atualizar um cliente por CPF
router.put('/cpf/:cpf', clienteController.atualizarClientePorCpf); 

// Rota para atualizar um cliente por CPF com Patch
router.patch('/cpf/:cpf', clienteController.atualizarClientePorCpf); 

// Rota para atualizar um cliente por ID com Patch
router.patch('/id/:id', clienteController.atualizarClientePorId); 

// Rota para deletar um cliente por ID
router.delete('/id/:id', clienteController.deletarClientePorId); 

// Rota para deletar um cliente por CPF
router.delete('/cpf/:cpf', clienteController.deletarClientePorCpf); 

// Deletar todos os clientes
router.delete('/todos', clienteController.deletarTodosClientes);

module.exports = router;
