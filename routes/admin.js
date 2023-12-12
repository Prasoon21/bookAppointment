const express = require('express');
const path = require('path');

const route = express.Router();

const rootDir = require('../util/path');

const appointmentUser = require('../controller/controller appointment')



route.get('/', appointmentUser.getUser);

route.post('/', appointmentUser.postUser);

route.delete('/:id', appointmentUser.deleteUser);

module.exports = route;