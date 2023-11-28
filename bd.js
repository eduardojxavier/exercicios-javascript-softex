const Sequelize = require('sequelize');
      
      const sequelize = new Sequelize('database', 'username', 'password', {
         host: 'localhost',
         dialect: 'mysql'
      });
      
      sequelize.authenticate()
         .then(() => {
            console.log('Conexão estabelecida com sucesso.');
         })
         .catch((error) => {
            console.error('Erro ao conectar-se ao banco de dados:', error);
         });
    