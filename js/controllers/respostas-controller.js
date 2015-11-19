angular.module('jogo')
.controller('RespostasController', function() {
  this.respostas = listasRespostas;
});

var listasRespostas = [
  { 'resposta': '', 'pontos': '40', 'numero': 1 },
  { 'resposta': '', 'pontos': '15', 'numero': 2 },
  { 'resposta': '', 'pontos': '10', 'numero': 3 },
  { 'resposta': '', 'pontos': '11', 'numero': 4 },
  { 'resposta': '', 'pontos': '04', 'numero': 5 },
  { 'resposta': '', 'pontos': '09', 'numero': 6 },
  { 'resposta': '', 'pontos': '05', 'numero': 7 }
];
// var listasRespostas = [
//   { 'resposta': 'Corridas', 'pontos': '40', 'isRespondida': false },
//   { 'resposta': 'Mestre do Scrum', 'pontos': '15', 'isRespondida': true },
//   { 'resposta': 'Dono do Produto', 'pontos': '10', 'isRespondida': false },
//   { 'resposta': 'Time', 'pontos': '11', 'isRespondida': false },
//   { 'resposta': 'Fluxo de Processo', 'pontos': '04', 'isRespondida': false },
//   { 'resposta': 'Reuniões Diárias', 'pontos': '09', 'isRespondida': false },
//   { 'resposta': 'Revisão', 'pontos': '05', 'isRespondida': false }
// ];