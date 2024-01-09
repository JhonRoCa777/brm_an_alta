const router = require("express").Router();
const usuarioController = require("../controller/usuario.controller");

router.post("/", usuarioController.create);

module.exports = router;