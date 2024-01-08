const { Model, DataTypes, UUIDV4 } = require("sequelize");
const sequelize = require("../database/index");

class Credencial extends Model {}

Credencial.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        primaryKey: true
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
        validate: {
            len: {
                args: [1, 50],
                msg: "Mínimo 1 y Máximo 50 carácteres"
            },
            isEmail: {
                msg: "Email No Válido"
            }
        }
    },
    password: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
        validate: {
            len: {
                args: [1, 100],
                msg: "Mínimo 1 y Máximo 100 carácteres"
            }, 
        }
    },
    role: {
        type: DataTypes.ENUM([
            'ADMIN',
            'CLIENT'
        ]),
        allowNull: false
    }
},{
    sequelize,
    modelName: "Credencial",
    tableName: "Credencial"
});

module.exports = Credencial;