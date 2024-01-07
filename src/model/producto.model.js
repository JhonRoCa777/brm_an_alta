const { Sequelize, Model, DataTypes, UUIDV4 } = require("sequelize");

const sequelize = new Sequelize("brm_an_alta_prueba", "root", "", {
    host: "localhost",
    dialect: "mysql",
    port: "3306"
});

class Producto extends Model {}

Producto.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        primaryKey: true
    },
    numero_lote: {
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: true,
        validate: {
            len: {
                args: [10, 20],
                msg: "Mínimo 10 y Máximo 20 carácteres"
            }, 
        }
    },
    nombre: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
            len: [1, 50]
        }
    },
    cantidad: {
        type: DataTypes.SMALLINT.UNSIGNED,
        allowNull: false
    },
    precio: {
        type: DataTypes.FLOAT(10,2).UNSIGNED,
        allowNull: false
    }
},{
    sequelize,
    modelName: "Producto",
    tableName: "Producto"
});

module.exports = Producto;

// async function testConnection(){
//     try {
//         await sequelize.authenticate();
//         console.log("TODO BIEN");
//     } catch (error) {
//         console.error("TODO MAL", error);
//     }
// }

// testConnection();