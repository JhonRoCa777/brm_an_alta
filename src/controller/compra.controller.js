require('dotenv').config();
const Factura = require("../model/factura.model");
const Compra = require("../model/compra.model");
const jwt = require("jsonwebtoken");
const sequelize = require("../database/index");
const Producto = require('../model/producto.model');

const create = async (req, res, next) => {

    const accessToken = req.headers['authorization'].split(' ')[1];

    if(!accessToken) res.status(404).json();

    jwt.verify(
        accessToken,
        process.env.JWT_KEY,
        async (err, usr) => {
            if (err) return res.status(404).json();
            else {
                try {
                    var t = await sequelize.transaction();
            
                    var response = await Factura.create({
                        usuario: usr.id
                    }, {transaction: t});

                    let current;
            
                    for(let i=0; i<req.body.compras.length; i++){
                        await Compra.create({
                            factura: response.id,
                            producto: req.body.compras[i].producto,
                            nombre: req.body.compras[i].nombre,
                            cantidad: req.body.compras[i].cantidad,
                            precio: req.body.compras[i].precio
                        }, {transaction: t});

                        current = await Producto.findByPk(req.body.compras[i].producto);
                        current.cantidad -= req.body.compras[i].cantidad;
                        await current.save({transaction: t});
                    }
                
                    await t.commit();
                    res.status(200).json(response.id);
                } catch (error) {
                    await t.rollback();
                    console.log(error);
                    res.status(400).json();
                }
            }
        }
    );
}

module.exports = { create };