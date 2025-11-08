// models/treinadorModel.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize-config.js';

const Treinador = sequelize.define('Treinador', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cidade: {
        type: DataTypes.STRING,
        allowNull: false
    },
    imagem: {
        type: DataTypes.STRING,
        allowNull: true
    },
    // Para Sequelize, vamos armazenar como JSON ou criar tabela de relação
    equipe: {
        type: DataTypes.JSON, // Armazena array de IDs como JSON
        allowNull: true,
        defaultValue: [] // Array vazio por padrão
    }
}, {
    tableName: 'treinadores',
    timestamps: true
});

// Sincronizar tabela
Treinador.sync({ force: false })
    .then(() => console.log('✅ Tabela Treinador sincronizada'))
    .catch(err => console.error('❌ Erro ao sincronizar Treinador:', err));

export default Treinador;