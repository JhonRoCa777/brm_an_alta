const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/faker", require("../router/faker.router"));
app.use("/api/credencial", require("../router/credencial.router"));
app.use("/api/usuario", require("../router/usuario.router"));
app.use("/api/producto", require("../router/producto.router"));
app.use("/api/compra", require("../router/compra.router"));
app.use("/api/factura", require("../router/factura.router"));

module.exports = app;