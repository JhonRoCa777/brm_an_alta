const { faker } = require("@faker-js/faker");
const Producto = require("../model/producto.model");

const generate = async (req, res) => {
    await Producto.sync();
    await Producto.create({
        numero_lote: faker.string.alphanumeric(15),
        nombre: faker.commerce.productName(),
        cantidad: faker.number.int({ min: 0, max: 30 }),
        precio: faker.number.int({ min: 100100, max: 999999 })
    });
    res.status(201).json();
};

module.exports = { generate };