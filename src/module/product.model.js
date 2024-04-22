//const { default: test } = require('node:test');
const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('product_test', 'root', 'null', {
    host: 'localhost',
    dialect:'mysql',
    port: 3306,
});

async function testConnection(){
try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (err) {
    console.error('Unable to connect to the database:', err);
}
}

testConnection();