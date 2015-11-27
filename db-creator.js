var fs = require('fs');
var dbFile = "jogo.db";
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(dbFile);

db.serialize(function() {
  if(!fs.existsSync(dbFile)) {

    // Cria esquema do banco de dados do jogo
    criaEsquema();

    // Cria lista de niveis do jogo
    insereNiveis();

    insereDesafios();

    insereResposta();
  }
});

function criaEsquema() {
  db.serialize(function() {
    db.run("CREATE TABLE Niveis (id int PRIMARY KEY, titulo varchar(30), isDisponivel int, desafiosCompletados int)");
    db.run("CREATE TABLE Desafios (id int PRIMARY KEY, titulo varchar(30), pontuacao int)");
    db.run("CREATE TABLE Niveis_Desafios (nivel_id int REFERENCES Niveis(id), desafio_id int REFERENCES Desafios(id))");
    db.run("CREATE TABLE Respostas (id int PRIMARY KEY, desafio_id int REFERENCES Desafios(id), pontos int, resposta varchar(30))");
  });
}

function insereNiveis() {
  db.serialize(function() {
    db.run("INSERT INTO Niveis VALUES (1, 'Métodos Ágeis', 1, 1)");
    db.run("INSERT INTO Niveis VALUES (2, 'Métodos Tradicionais', 0, 0)");
    db.run("INSERT INTO Niveis VALUES (3, '', 0, 0)");
    db.run("INSERT INTO Niveis VALUES (4, '', 0, 0)");
    db.run("INSERT INTO Niveis VALUES (5, '', 0, 0)");
    db.run("INSERT INTO Niveis VALUES (6, '', 0, 0)");
    db.run("INSERT INTO Niveis VALUES (7, '', 0, 0)");
    db.run("INSERT INTO Niveis VALUES (8, '', 0, 0)");
    db.run("INSERT INTO Niveis VALUES (9, '', 0, 0)");
  });
}

function insereDesafios() {
  db.serialize(function() {
    db.run("INSERT INTO Desafios VALUES (1, 'Scrum', 0)");
    db.run("INSERT INTO Desafios VALUES (2, 'XP', 0)");
    db.run("INSERT INTO Desafios VALUES (3, 'Kanban', 0)");
    db.run("INSERT INTO Niveis_Desafios VALUES (1, 1)");
    db.run("INSERT INTO Niveis_Desafios VALUES (1, 2)");
    db.run("INSERT INTO Niveis_Desafios VALUES (1, 3)");
  });
}

function insereResposta() {
  db.serialize(function() {
    db.run("INSERT INTO Respostas VALUES (1, 1, 40, 'Corridas')");
    db.run("INSERT INTO Respostas VALUES (2, 1, 15, 'Mestre do Scrum')");
    db.run("INSERT INTO Respostas VALUES (3, 1, 10, 'Dono do Produto')");
    db.run("INSERT INTO Respostas VALUES (4, 1, 11, 'Time')");
    db.run("INSERT INTO Respostas VALUES (5, 1, 4, 'Fluxo de Processo')");
    db.run("INSERT INTO Respostas VALUES (6, 1, 9, 'Reuniões Diárias')");
    db.run("INSERT INTO Respostas VALUES (7, 1, 5, 'Revisão')");

    db.run("INSERT INTO Respostas VALUES (8, 2, 40, 'Desenvolvimento em Pares')");
    db.run("INSERT INTO Respostas VALUES (9, 2, 15, 'História de Usuário')");
    db.run("INSERT INTO Respostas VALUES (10, 2, 10, 'Keep It Simple')");
    db.run("INSERT INTO Respostas VALUES (11, 2, 11, 'Refatoração')");
    db.run("INSERT INTO Respostas VALUES (12, 2, 4, 'Testes')");
  });
}

db.close();