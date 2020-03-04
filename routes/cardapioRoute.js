const express = require('express');
const cardapioController = require('../controllers/cardapioControllers')

let routes = express.Router();

routes.get('/cadastrar/:pizza/:preco',(req,res)=>{
    //let nomeDigitado = req.params.nome
    // let {pizza,preco} = req.params;//destructuring
    res.send(`Cadastrou pizza com sucesso!`)
});

routes.get('/visualizar',cardapioController.listarCardapio);

module.exports = routes;