// src/routes/clientes.js

import express from 'express';
import Cliente from '../model/cliente';

const router = express.Router();

// Rota para obter todos os clientes
router.get('/clientes', (req, res) => {
  const clientes = Cliente.getAllClientes();
  res.json(clientes);
});

// Rota para atualizar um cliente
router.put('/clientes', (req, res) => {
  const { name, observacao } = req.body;

  const clienteExistente = Cliente.findClienteByName(name);
  if (!clienteExistente) {
    return res.status(404).json({ message: `Cliente ${name} não encontrado.` });
  }

  Cliente.updateCliente(name, observacao);
  res.json({ message: `Cliente ${name} atualizado.` });
});

// Rota para deletar um cliente
router.delete('/clientes/:name', (req, res) => {
  const { name } = req.params;

  const clienteExistente = Cliente.findClienteByName(name);
  if (!clienteExistente) {
    return res.status(404).json({ message: `Cliente ${name} não encontrado.` });
  }

  Cliente.deleteCliente(name);
  res.json({ message: `Cliente ${name} deletado.` });
});

export default router;
