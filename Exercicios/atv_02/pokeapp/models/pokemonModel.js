import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize-config.js';

const TIPOS_POKEMON = [
    'Normal', 'Fogo', 'Água', 'Elétrico', 'Grama', 'Gelo', 
    'Lutador', 'Veneno', 'Terra', 'Voador', 'Psíquico', 
    'Inseto', 'Pedra', 'Fantasma', 'Dragão', 'Sombrio', 
    'Aço', 'Fada'
];

const Pokemon = sequelize.define('Pokemon', {
    numero: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tipo1: {
        type: DataTypes.ENUM(...TIPOS_POKEMON),
        allowNull: false
    },
    tipo2: {
        type: DataTypes.ENUM(...TIPOS_POKEMON),
        allowNull: true
    },
    descricao: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    imagem: {
        type: DataTypes.STRING,
        allowNull: true
    },
    altura: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    peso: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    categoria: {
        type: DataTypes.STRING,
        allowNull: true
    },
    habilidade: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    tableName: 'pokemons',
    timestamps: true
});

// Sincronizar apenas a tabela (sem dados iniciais)
Pokemon.sync({ force: false })
    .then(() => console.log('✅ Tabela Pokemon sincronizada'))
    .catch(err => console.error('❌ Erro ao sincronizar Pokemon:', err));

export { Pokemon, TIPOS_POKEMON };
export default Pokemon;