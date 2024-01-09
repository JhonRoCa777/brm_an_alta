const { Model, DataTypes, UUIDV4 } = require("sequelize");
const sequelize = require("../database/index");

class Compra extends Model {}

Compra.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        primaryKey: true
    },
    factura: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4
    },
    producto: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4
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
    modelName: "Compra",
    tableName: "Compra"
});

module.exports = Compra;