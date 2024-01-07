const router = require("express").Router();
const productoController = require("../controller/producto.controller");

router.get("/", productoController.index);
router.post("/", productoController.create);
router.get("/:id", productoController.read);
router.put("/:id", productoController.update);
router.delete("/:id", productoController.destroy);

module.exports = router;