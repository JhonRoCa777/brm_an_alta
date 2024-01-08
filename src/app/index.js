const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/faker", require("../router/faker.router"));
app.use("/api/credencial", require("../router/credencial.router"));
app.use("/api/productos", require("../router/producto.router"));

module.exports = app;