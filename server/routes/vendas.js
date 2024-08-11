import { Router } from 'express';
const router = Router();

// Simulação de banco de dados em memória
let vendas = [];

// Criar uma nova venda
router.post('/', (req, res) => {
  const { produto, quantidade, preco } = req.body;
  const novaVenda = { id: vendas.length + 1, produto, quantidade, preco };
  vendas.push(novaVenda);
  res.status(201).json(novaVenda);
});

// Alterar uma venda existente
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { produto, quantidade, preco } = req.body;
  const venda = vendas.find(v => v.id === parseInt(id));

  if (venda) {
    venda.produto = produto || venda.produto;
    venda.quantidade = quantidade || venda.quantidade;
    venda.preco = preco || venda.preco;
    res.json(venda);
  } else {
    res.status(404).json({ message: 'Venda não encontrada' });
  }
});

// Excluir uma venda
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const index = vendas.findIndex(v => v.id === parseInt(id));

  if (index !== -1) {
    vendas.splice(index, 1);
    res.json({ message: 'Venda excluída com sucesso' });
  } else {
    res.status(404).json({ message: 'Venda não encontrada' });
  }
});

// Listar todas as vendas
router.get('/', (req, res) => {
  res.json(vendas);
});

export default router;
