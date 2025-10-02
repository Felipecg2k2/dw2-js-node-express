// É no Model que criaremos a estrutura da tabela no banco de dados

import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

// Definindo a estrutura da tabela
const Produto = connection.define('produto', {
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    preco: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    categoria: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

Produto.sync({force: false});

export default Produto;