const env = require('./env')

const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database, env.username, env.password, {
    host: env.host,
    dialect: env.dialect,
    operatorsAliases: false,
    pool: {
        max: env.pool.max,
        min: env.pool.min,
        acquire: env.pool.acquire,
        idle: env.pool.idle
    }
});

const db = {}
db.sequelize = sequelize,
db.Sequelize = Sequelize

db.product = require('../model/model.product')(sequelize, Sequelize);

module.exports = db;