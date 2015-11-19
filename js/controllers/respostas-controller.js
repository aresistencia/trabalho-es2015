angular.module('jogo')
.controller('RespostasController', function() {
  this.respostas = listasRespostas;
});

var listasRespostas = [
  { 'resposta': 'Corridas', 'pontos': '40', 'isRespondida': false },
  { 'resposta': 'Mestre do Scrum', 'pontos': '15', 'isRespondida': false },
  { 'resposta': 'Dono do Produto', 'pontos': '10', 'isRespondida': false },
  { 'resposta': 'Time', 'pontos': '11', 'isRespondida': false },
  { 'resposta': 'Fluxo de Processo', 'pontos': '04', 'isRespondida': false },
  { 'resposta': 'Reuniões Diárias', 'pontos': '09', 'isRespondida': false },
  { 'resposta': 'Revisão', 'pontos': '05', 'isRespondida': false }
];