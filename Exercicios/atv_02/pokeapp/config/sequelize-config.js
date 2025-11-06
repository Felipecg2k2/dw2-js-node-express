// sequelize-config.js
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: '',
    database: 'pokeapp', 
    timezone: "-03:00"
});

export default sequelize;