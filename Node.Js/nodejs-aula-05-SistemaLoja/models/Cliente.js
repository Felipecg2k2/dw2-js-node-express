// É no Model que criaremos a estrutura da tabela no banco de dados

import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

// Definindo a estrutura da tabela
const Cliente = connection.define('cliente', {
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    cpf: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    endereco: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});
// Sincronizando a tabela com o banco de dados
Cliente.sync({force: false})

export default Cliente;