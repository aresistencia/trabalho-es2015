CREATE TABLE Niveis (
    id int PRIMARY KEY,
    titulo varchar(30),
    isDisponivel int,
    desafiosCompletados int
);

CREATE TABLE Desafios (
    id int PRIMARY KEY,
    titulo varchar(30),
    pontuacao int
);

CREATE TABLE Niveis_Desafios (
    nivel_id int REFERENCES Niveis(id),
    desafio_id int REFERENCES Desafios(id)
);

CREATE TABLE Respostas (
    id int PRIMARY KEY,
    desafio_id int REFERENCES Desafios(id),
    pontos int,
    resposta varchar(30)
);