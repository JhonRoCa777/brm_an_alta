require('dotenv').config();
const jwt = require("jsonwebtoken");

/**
 * @param id id del usuario
 * @param role role del usuario
 * 
 * @returns token firmado
 */
const sign = (id, role) => {
    return jwt.sign(
        {id, role},
        process.env.JWT_KEY,
        {expiresIn: '1m'}
    );
}

/**
 * @param token token a validar
 * 
 * @returns true si es válido
 * @returns false si no es válido
 */
const validate = (token) => {
    jwt.verify(
        token,
        process.env.JWT_KEY,
        (err, user) => {
            if(err) return false
            else return true
        }
    );
}

module.exports = { sign, validate }