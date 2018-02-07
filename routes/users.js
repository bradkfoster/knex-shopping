const express = require('express');
const bodyParser = require('body-parser');
const knex = require('../knex/knex.js');

const app = express();
const router = express.Router();

router
// .put(/)
.get('/:id', (req,res)=>{
  let id = req.params.id;
  console.log(id);
  res.send('send back')
})


module.exports = router;
