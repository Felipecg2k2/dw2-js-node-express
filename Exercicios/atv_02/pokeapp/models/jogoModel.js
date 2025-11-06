import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize-config.js';

const Jogo = sequelize.define('Jogo', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    console: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ano: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    imagens: {
        type: DataTypes.TEXT, // JSON string
        allowNull: true
    }
}, {
    tableName: 'jogos',
    timestamps: true
});

Jogo.sync({ force: false })
    .then(() => console.log('✅ Tabela Jogo sincronizada'))
    .catch(err => console.error('❌ Erro ao sincronizar Jogo:', err));

export default Jogo;