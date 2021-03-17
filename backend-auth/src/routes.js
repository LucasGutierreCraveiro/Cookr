const routes = require('express').Router();
const { User } = require('./app/models');
const SessionController = require('./app/controllers/SessionController');
const ProfileController = require('./app/controllers/ProfileController');
const authMiddleware = require('./app/middleware/auth');
// Rotas Todo

/**
 * 
 *  Rotas para:
 *  Criar User, [Done]
 *  Alterar e-mail, []
 *  Alterar Senha, []
 *  Alterar Nome, []
 *  Consultar Usuário por Id, []
 *  Consultar Usuário por e-mail, []
 *  Consultar Usuário por nome, []
 */


routes.post('/sessions', SessionController.store);
routes.post('/sessions/new', SessionController.create);


routes.use(authMiddleware);
routes.get('/profile', ProfileController.store);


module.exports = routes;