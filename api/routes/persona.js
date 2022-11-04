const express = require('express');
const personaRoutes = express.Router();

const PersonaController = require('../../src/controllers/Personas.controller');
const personaApi = PersonaController;

personaRoutes.get('/', async (req, res) => {
    let list = await personaApi.listarAll();
    res.send(list);
});

personaRoutes.get('/:dni', async (req, res) => {
    let dni = req.params.dni;
    let persona = await personaApi.listar(dni);
    if (persona == null) {
        persona = { error: 'producto no encontrado'};
    }
    res.send(persona);
});

personaRoutes.post('/', async (req, res) => {
    let persona = req.body;
    await personaApi.guardar(persona);
    res.send('ok');
});

module.exports = personaRoutes;