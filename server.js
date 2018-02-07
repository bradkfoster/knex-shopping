const express = require('express');
const bodyParser = require('body-parser');
const knex = require('./knex/knex.js');
const cart= require('./routes/cart');
const products = require('./routes/products');
const users = require('./routes/users');
const PORT = process.env.PORT||3000;

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.use('/users',users);
app.use('/products',products);
app.use('/cart',cart);






app.listen(PORT,(err)=>{
  if(err){
    throw err;
  }
  console.log(`Server is listening on ${PORT}`);
})