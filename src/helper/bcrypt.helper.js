const bcrypt = require("bcrypt");

const encrypt = async (word) => {
    return await bcrypt.hash(word, 10);
}

const validate = async (word, hash_word) => {
    return await bcrypt.compare(word, hash_word);
}

module.exports = { encrypt, validate }