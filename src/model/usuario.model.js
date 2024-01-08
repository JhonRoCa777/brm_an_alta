const { Model, DataTypes, UUIDV4 } = require("sequelize");
const sequelize = require("../database/index");

class Usuario extends Model {}

Usuario.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        primaryKey: true
    },
    credencial: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4
    },
    nombres: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
            len: {
                args: [1, 50],
                msg: "Mínimo 1 y Máximo 50 carácteres"
            }
        }
    },
    apellidos: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
            len: {
                args: [1, 50],
                msg: "Mínimo 1 y Máximo 50 carácteres"
            }
        }
    },
    tipo_documento: {
        type: DataTypes.ENUM([
            'CÉDULA DE CIUDADANÍA',
            'CÉDULA DE EXTRANJERÍA',
            'PASAPORTE',
            'REGISTRO CIVIL'
        ]),
        allowNull: false
    },
    documento: {
        type: DataTypes.STRING(15),
        allowNull: false,
        unique: true,
        validate: {
            len: {
                args: [8, 15],
                msg: "Mínimo 8 y Máximo 15 carácteres"
            }, 
        }
    }
},{
    sequelize,
    modelName: "Usuario",
    tableName: "Usuario"
});

module.exports = Usuario;