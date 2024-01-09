const router = require("express").Router();
const credencialController = require("../controller/credencial.controller");

router.post("/login", credencialController.login);

module.exports = router;