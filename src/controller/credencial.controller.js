const Credencial = require("../model/credencial.model");
const bcryptHelper = require("../helper/bcrypt.helper");
const jwtHelper = require("../helper/jwt.helper");

const create = async (req, res) => {
    let response;
    try {
        response = await Credencial.create(req.body);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json(error);
    }
};

const login = async (req, res) => {

    let response;

    response = await Credencial.findOne({
        where: {
            email: req.body.email
        }
    });

    if(response && await bcryptHelper.validate(req.body.password, response.password)) {
        res.status(200).json(jwtHelper.sign(
            response.id, response.role
        ));
    }
    
    res.status(404).json();
}

module.exports = {
    create, login
};