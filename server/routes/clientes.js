import { Router } from 'express';
const router = Router();

// Simulação de banco de dados em memória
let clientes = [];

// Criar um novo cliente
router.post('/', (req, res) => {
  const { nome, email, telefone } = req.body;
  const novoCliente = { id: clientes.length + 1, nome, email, telefone };
  clientes.push(novoCliente);
  res.status(201).json(novoCliente);
});

// Alterar um cliente existente
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { nome, email, telefone } = req.body;
  const cliente = clientes.find(c => c.id === parseInt(id));

  if (cliente) {
    cliente.nome = nome || cliente.nome;
    cliente.email = email || cliente.email;
    cliente.telefone = telefone || cliente.telefone;
    res.json(cliente);
  } else {
    res.status(404).json({ message: 'Cliente não encontrado' });
  }
});

// Excluir um cliente
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const index = clientes.findIndex(c => c.id === parseInt(id));

  if (index !== -1) {
    clientes.splice(index, 1);
    res.json({ message: 'Cliente excluído com sucesso' });
  } else {
    res.status(404).json({ message: 'Cliente não encontrado' });
  }
});

// Listar todos os clientes
router.get('/', (req, res) => {
  res.json(clientes);
});

export default router;
