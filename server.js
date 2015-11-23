var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/lista-niveis', function(request, response) {
  var listaNiveis = [
    {
      "numero": 1,
      "titulo": "",
      "isDisponivel": true,
      "desafiosCompletados": 1
    },
    {
      "numero": 2,
      "titulo": "",
      "isDisponivel": false,
      "desafiosCompletados": 0
    },
    {
      "numero": 3,
      "titulo": "",
      "isDisponivel": false,
      "desafiosCompletados": 0
    },
    {
      "numero": 4,
      "titulo": "",
      "isDisponivel": false,
      "desafiosCompletados": 0
    },
    {
      "numero": 5,
      "titulo": "",
      "isDisponivel": false,
      "desafiosCompletados": 0
    },
    {
      "numero": 6,
      "titulo": "",
      "isDisponivel": false,
      "desafiosCompletados": 0
    },
    {
      "numero": 7,
      "titulo": "",
      "isDisponivel": false,
      "desafiosCompletados": 0
    },
    {
      "numero": 8,
      "titulo": "",
      "isDisponivel": false,
      "desafiosCompletados": 0
    },
    {
      "numero": 9,
      "titulo": "",
      "isDisponivel": false,
      "desafiosCompletados": 0
    }
  ];
  response.json(listaNiveis);

});

app.listen(3000, function() {
  console.log("Rodando aplicacao na porta 3000...");
});
