const path = require('path');

const rootDir = require('../util/path');


const User = require('../models/book')
exports.Error404 = (req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'))
}