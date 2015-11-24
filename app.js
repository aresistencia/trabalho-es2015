var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/lista-niveis', function(request, response) {
  response.json(listaNiveis);
});

app.get('/nivel/1', function(request, response) {
  response.send(listaDesafios[1]);
});

// Variaveis para auxiliar as respostas das requisicoes

// Lista de niveis do jogo
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

// Lista com lista de desafios para cada nivel
var listaDesafios = [
  { /* Objeto vazio para facilitar a indexacao: nivel 1 -> indice 1 */ },
  {
    'numero': 1,
    'titulo': 'Metodologias Ágeis',
    'desafios': ['Scrum', 'XP', 'Kanban']
  }
];

module.exports = app;