const cardapio = require('../models/cardapio')

let cardapioController = {
    listarCardapio: (req,res)=>{
        let listaDePizza = cardapio.listarCardapio();
        res.send(listaDePizza);
    }

}


module.exports = cardapioController;