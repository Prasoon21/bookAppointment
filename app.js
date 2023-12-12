const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const cors = require('cors');
const rootDir = require('./util/path');

const bookRoutes = require('./routes/admin');

const sequelize = require('./util/database');

const errorController = require('./controller/error');
const db = require('./models/book');

app.use(bodyParser.json());
app.use(cors());

app.use('/user', bookRoutes);


//app.use(errorController.Error404);

sequelize.sync()
    .then(() =>{
        console.log('database synced successfully');
        app.listen(8000, () => {
            console.log('Server is running on port 8000');
            app.get('/welcome', (req, res) => {
                res.sendFile(path.join(__dirname, "views", 'booking.html'));
            })
        });
    })
    .catch(err => console.log(err))

