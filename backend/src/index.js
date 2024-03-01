const { Sequelize } = require('sequelize');

// Importa as configurações do Sequelize
const sequelizeConfig = require('./db/config/config');

// Inicie uma instância do Sequelize
const sequelize = new Sequelize(sequelizeConfig.development);

// Teste a conexão
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexão bem-sucedida com o banco de dados.');
  } catch (error) {
    console.error('Erro ao conectar-se ao banco de dados:', error);
  }
})();
