const Compra = require("../model/compra.model");
const Factura = require("../model/factura.model");
const Usuario = require("../model/usuario.model");

const read = async (req, res) => {
    let response;
    response = await Factura.findByPk(req.params.id);
    if(response)
    {
        let usuario = await Usuario.findOne({
            where: {
                credencial: response.usuario
            }
        });

        let compras = await Compra.findAll({
            where: {
                factura: response.id
            }
        });

        res.status(200).json({
            usuario: usuario,
            compras: compras
        })
    }
    else res.status(404).json();
};

module.exports = {
    read
};