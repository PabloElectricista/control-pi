const { Sequelize } = require('sequelize');
require('dotenv').config();
const modelPin = require('./pin.js')

const DB_PASS = process.env.DB_PASS

const sequelize = new Sequelize(`postgres://pi:${DB_PASS}@localhost:5432/piled`, {
        logging: false
});

modelPin(sequelize)

module.exports = {
        conn: sequelize,
        ...sequelize.models
}
