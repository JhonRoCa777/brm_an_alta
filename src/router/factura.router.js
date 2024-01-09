const router = require("express").Router();
const facturaController = require("../controller/factura.controller");

router.get("/:id", facturaController.read);

module.exports = router;