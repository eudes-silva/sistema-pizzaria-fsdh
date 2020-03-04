const express = require('express');
const rotasUsuario = require('./routes/usuarioRoute');
const rotasCardapio = require('./routes/cardapioRoute');

let app = express();

app.use('/usuarios',rotasUsuario);
app.use('/cardapio',rotasCardapio);

// app.get('/',(req,res)=>{
//     res.send("<h1>Você está no sistema pizzaria DH</h1>");
// });

// app.get('/cardapio',(req,res)=>{
//     res.send("<h1>Você está vendo o cardápio da pizzaria DH</h1>");
// })

app.listen(3000,()=>{
    console.log('Servidor online.');
})