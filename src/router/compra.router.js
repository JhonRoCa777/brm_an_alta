const router = require("express").Router();
const compraController = require("../controller/compra.controller");

router.post("/", compraController.create);

module.exports = router;