const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

// ROUTES
app.use("/api/productos", require("../router/producto.router"));
app.use("/api/faker", require("../router/faker.router"));

module.exports = app;