const { Model, DataTypes, UUIDV4 } = require("sequelize");
const sequelize = require("../database/index");

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