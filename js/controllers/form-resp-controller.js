app.controller('FormRespController', function() {
  this.texto = "";
  this.validaResposta = function(inputText) {
  inputText = inputText.toLowerCase();
  if (inputText == 'dono' || inputText == 'owner'|| inputText == 'dono do produto'){
      inputText = 'Dono do Produto';}
  else if (inputText == 'sprint' || inputText == 'corrida' || inputText == 'corridas'){
      inputText = 'Corridas';}
  else if (inputText == 'mestre' || inputText == 'master' || inputText == 'mestre do scrum'){
      inputText = 'Mestre do Scrum';}
  else if (inputText == 'time' || inputText == 'team'){
      inputText = 'Time';}
  else if (inputText == 'fluxo' || inputText == 'processo'|| inputText == 'fluxo de processo'){
      inputText = 'Fluxo de Processo';}
  else if (inputText == 'reunioes' || inputText == 'diarias' || inputText == 'reuniões' || inputText == 'diárias' || 
              inputText == 'reunioes diarias' || inputText == 'reuniões diárias'){
      inputText = 'Reuniões Diárias';}
  else if (inputText == 'revisao' || inputText == 'revisão'){
      inputText = 'Revisão';}
    for (var i = 0; i < 7; i++) {
      if (listaDesafios[0][0].respostas[i].resposta === inputText) {
        listaDesafios[0][0].respostas[i].isRespondida = true;
      }
      this.texto = "";
    }
  };
});