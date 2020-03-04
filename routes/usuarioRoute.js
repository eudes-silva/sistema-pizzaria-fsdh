const express = require('express');


let routes = express.Router();


routes.get('/:nome',(req,res)=>{
    //let nomeDigitado = req.params.nome
    let {nome:nomeDigitado} = req.params;//destructuring
    res.send(`Seja bem vindo ${nomeDigitado}`)
});


module.exports = routes;
