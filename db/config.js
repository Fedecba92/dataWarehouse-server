const sequelize = require('sequelize');
const { Sequelize } = require('sequelize');
const config=require('../config');

const db = {};

db.connection = new sequelize(config.database,config.username,config.password,config);

module.exports = db;

