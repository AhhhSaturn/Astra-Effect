const express = require('express');

const api = express();
api.listen(3000, () => {
    console.log('API up and running!');
});

api.get('/', (req, res) => {
    console.log(req);
    res.send('Hola bitch!');
});
  
api.use(express.static(__dirname + '/public'));


api.use((req, res, next) => {
    console.log('Hello');
    next();
   });