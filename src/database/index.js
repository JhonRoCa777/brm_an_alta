require("dotenv").config();
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_TYPE,
    port: process.env.DB_PORT
});

module.exports = sequelize;

// async function testConnection(){
//     try {
//         await sequelize.authenticate();
//         console.log("TODO BIEN");
//     } catch (error) {
//         console.error("TODO MAL", error);
//     }
// }

// testConnection();