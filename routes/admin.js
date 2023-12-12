const express = require('express');
const path = require('path');

const route = express.Router();

const rootDir = require('../util/path');

const appointmentUser = require('../controller/controller appointment')



route.get('/get-user', appointmentUser.getUser);

route.post('/add-user', appointmentUser.postUser);

route.delete('/delete-user/:id', appointmentUser.deleteUser);

module.exports = route;