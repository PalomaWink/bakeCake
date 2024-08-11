import { defineDb, defineTable } from 'astro:db';

// Defining the database structure
export default defineDb({
  tables: {
    // Customers table
    clientes: defineTable({
      columns: {
        id: { type: 'number', primary: true }, // Primary key
        nome: { type: 'string' },
        email: { type: 'string' },
        telefone: { type: 'string' },
        createdAt: { type: 'date' }, // Creation date
      },
    }),
    // Sales table
    vendas: defineTable({
      columns: {
        id: { type: 'number', primary: true }, // Primary key
        produto: { type: 'string' },
        quantidade: { type: 'number' },
        preco: { type: 'number' },
        clienteId: { type: 'number' }, // Foreign key for the customer
        createdAt: { type: 'date' }, // Creation date
      },
    }),
  },
});