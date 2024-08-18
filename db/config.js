import { defineDb, defineTable, column, db } from 'astro:db';

const clients = defineTable({
  columns: {
    clientId: column.number({ primaryKey: true }),
    name: column.text(),
    observacao: column.text({ optional: true }),
  },
})
const vendas = defineTable({
  columns: {
    vendasId: column.number({ primaryKey: true }),
    produto: column.text(),
    quantidade: column.number(),
    preco: column.number(),
    clienteId: column.number(),
  },
  foreignKeys: [
    {
      columns: ['clienteId'],
      references: () => [clients.columns.clientId],
    }
  ]
})
export default defineDb({
  tables: {
    clients,
    vendas
  }
});