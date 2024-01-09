const Credencial = require("../model/credencial.model");
const bcryptHelper = require("../helper/bcrypt.helper");
const jwtHelper = require("../helper/jwt.helper");

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

module.exports = { login };