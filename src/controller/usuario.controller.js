const Credencial = require("../model/credencial.model");
const Usuario = require("../model/usuario.model");
const bcryptHelper = require("../helper/bcrypt.helper");

const create = async (req, res) => {
    let response;
    try {
        response = await Credencial.create({
            email: req.body.email,
            password: await bcryptHelper.encrypt(req.body.password),
            role: req.body.role
        });
        await Usuario.create({
            credencial: response.id,
            nombres: req.body.nombres,
            apellidos: req.body.apellidos,
            tipo_documento: req.body.tipo_documento,
            documento: req.body.documento
        });
        res.status(200).json();
    } catch (error) {
        res.status(400).json(error);
    }
};

module.exports = { create };