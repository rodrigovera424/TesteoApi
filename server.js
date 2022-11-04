require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser')
const personaRoutes = require('./api/routes/persona');
const mongoose = require("mongoose");
const { Server: HttpServer } = require("http");
const port = process.env.PORT || 3000;

mongoose
  .connect("mongodb+srv://test:123456alison@cluster0.piknkma.mongodb.net/?retryWrites=true&w=majority")
  .then(() => console.log("DB is connected"))
  .catch((err) => console.log(err));

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const httpServer = new HttpServer(app);

function errorHandler(err, req, res, next) {
    console.error(err);
    res.status(500).send(err.stack);
}

app.use("/api/persona", personaRoutes);

app.use(errorHandler);

httpServer.listen(port, () => {
    console.log(`Servidor http escuchando en el puerto ${port}`);
});
