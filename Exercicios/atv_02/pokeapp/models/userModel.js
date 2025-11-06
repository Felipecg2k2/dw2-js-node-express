import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize-config.js';
import bcrypt from 'bcryptjs';

const User = sequelize.define('User', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'users',
    timestamps: true
});

// Hash da senha antes de salvar
User.beforeCreate(async (user) => {
    user.senha = await bcrypt.hash(user.senha, 10);
});

// Hash da senha antes de atualizar
User.beforeUpdate(async (user) => {
    if (user.changed('senha')) {
        user.senha = await bcrypt.hash(user.senha, 10);
    }
});

// Método para verificar senha
User.prototype.verificarSenha = function(senha) {
    return bcrypt.compare(senha, this.senha);
};

User.sync({ force: false })
    .then(() => console.log('✅ Tabela User sincronizada'))
    .catch(err => console.error('❌ Erro ao sincronizar User:', err));

export default User;