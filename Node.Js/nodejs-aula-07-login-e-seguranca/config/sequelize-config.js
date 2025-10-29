// sequelize-config.js
import { Sequelize } from 'sequelize';

// Mude de 'connection' para 'sequelize'
const sequelize = new Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: '',
    database: 'lojarelacional', 
    timezone: "-03:00"
});

export default sequelize;