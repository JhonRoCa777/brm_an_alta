const { faker } = require("@faker-js/faker");

const bcryptHelper = require("../helper/bcrypt.helper");

const Producto = require("../model/producto.model");
const Credencial = require("../model/credencial.model");
const Usuario = require("../model/usuario.model");

const generate = async (req, res) => {

    let cont;

    //Se generan Productos
    await Producto.sync({ force: true });

    cont = 0;

    while(cont < 30) {
        try {
            await Producto.create({
                numero_lote: faker.string.alphanumeric(15),
                nombre: faker.commerce.productName(),
                cantidad: faker.number.int({ min: 0, max: 30 }),
                precio: faker.number.int({ min: 100100, max: 999999 })
            });
            cont++;
        } catch (error) {
           res.status(400).json(error);
        }
    }

    //Se generan Credenciales y Usuarios
    await Credencial.sync({ force: true });
    await Usuario.sync({ force: true });

    cont = 0;

    let roles = ['ADMIN', 'CLIENT'];
    let documentos = ['1234567890', '9087654321'];
    let current_credencial;

    while(cont < roles.length) {
        try {
            current_credencial = await Credencial.create({
                email: roles[cont].toLowerCase()+"@gmail.com",
                password: await bcryptHelper.encrypt(roles[cont].toLowerCase()+'12345'),
                role: roles[cont]
            });

            await Usuario.create({
                credencial: current_credencial.id,
                nombres: faker.person.firstName(),
                apellidos: faker.person.lastName(),
                tipo_documento: 'CÉDULA DE CIUDADANÍA',
                documento: documentos[cont]
            });

            cont++;
        } catch (error) {
            res.status(400).json(error);
        }
    }
    
    res.status(201).json();
};

module.exports = { generate };