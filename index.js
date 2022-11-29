const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const controller = require('./Frontofficeuser.controller');
app.use(bodyParser.json());


const db = require('./db.config');
// creating table//
db.sequelize.sync().then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
});

// creating the single frontofficeuser /////

app.post('/frontofficeuser/new', function (req, res) {

    controller.createuser(req, res);

})

app.listen(port, () => {

    console.log('Listening on http://localhost:${port}');
});

