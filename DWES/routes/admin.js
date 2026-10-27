const express = require('express');

const router = express.Router();

//Servir pagina gestion de usuario
router.get('/users', (req, res, next) => {

})

//Recibir datos formulario, mostrar body y redirigir a raiz
router.post('/users', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
})

module.exports = router;