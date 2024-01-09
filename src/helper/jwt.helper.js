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
        {expiresIn: '60m'}
    );
}

module.exports = { sign }