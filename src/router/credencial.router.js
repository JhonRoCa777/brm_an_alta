const router = require("express").Router();
const credencialController = require("../controller/credencial.controller");

router.post("/", credencialController.create);
router.post("/login", credencialController.login);

module.exports = router;