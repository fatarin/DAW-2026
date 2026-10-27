//Parsear formularios codificados por URL
const bodyParser = require('body-parser');


const express = require('express');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

//Enrutadores
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');


app.use('/admin', (req, res, next) => {

});

app.use(adminRoutes);
app.use(shopRoutes);



