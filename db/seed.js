import { db } from 'astro:db';

// Função de seed para popular o banco de dados
export default async function seed() {
  // // Inserindo clientes
  // await db.table('clientes').insertMany([
  //   { id: 1, nome: 'Alice', observação:'observação', createdAt: new Date() },
  //   { id: 2, nome: 'Bob', observação:'observação', createdAt: new Date() },
  // ]);

  // // Inserindo vendas
  // await db.table('vendas').insertMany([
  //   { id: 1, produto: 'Produto A', quantidade: 2, preco: 50.0, clienteId: 1, createdAt: new Date() },
  //   { id: 2, produto: 'Produto B', quantidade: 1, preco: 30.0, clienteId: 2, createdAt: new Date() },
  // ]);
}
