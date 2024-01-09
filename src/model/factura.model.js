const { Model, DataTypes, UUIDV4 } = require("sequelize");
const sequelize = require("../database/index");

class Factura extends Model {}

Factura.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        primaryKey: true
    },
    usuario: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4
    }
},{
    sequelize,
    modelName: "Factura",
    tableName: "Factura"
});

module.exports = Factura;