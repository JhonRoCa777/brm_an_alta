const router = require("express").Router();
const fakerController = require("../controller/faker.controller");

router.get("/", fakerController.generate);

module.exports = router;