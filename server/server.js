import express, { json } from 'express';
import cors from 'cors';
import db from './db'; // Conexão com o banco de dados
import clientesRoutes from './routes/clientes';
import vendasRoutes from './routes/vendas';

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(json());

// Rotas
app.use('/api/clientes', clientesRoutes);
app.use('/api/vendas', vendasRoutes);

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
