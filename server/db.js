const { connect } = require('astro-db-client'); // Exemplo genérico; substitua pelo seu cliente de DB

const dbConnection = async () => {
  try {
    await connect('sua_string_de_conexao'); // Configure sua string de conexão
    console.log('Conectado ao banco de dados');
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados', error);
  }
};

module.exports = dbConnection;
