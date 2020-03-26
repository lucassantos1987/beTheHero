const express = require('express');
const routes = express.Router();

const OngController = require('./contollers/OngController');
const IncidentController = require('./contollers/IncidentController');
const ProfileController = require('./contollers/ProfileController');
const SessionController = require('./contollers/SessionController');

routes.post('/session', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/profile', ProfileController.index);

module.exports = routes;