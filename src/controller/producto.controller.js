const Producto = require("../model/producto.model");

const index = async (req, res) => {
    let response;
    response = await Producto.findAll();
    if(!response) response = [];
    res.status(200).json(response);
};

const create = async (req, res) => {
    let response;
    try {
        response = await Producto.create(req.body);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json(error);
    }
};

const read = async (req, res) => {
    let response;
    response = await Producto.findByPk(req.params.id);
    (response)
    ? res.status(200).json(response)
    : res.status(404).json();
};

const update = async (req, res) => {
    res.send("Producto");
};

const destroy = async (req, res) => {
    res.send("Producto");
};

module.exports = {
    index, create, read, update, destroy
};