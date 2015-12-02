CREATE TABLE usuario (
    id int PRIMARY KEY,
    username varchar(100),
    password varchar(32),
    nome varchar(100)
);

CREATE TABLE nivel (
    id int PRIMARY KEY,
    titulo varchar(100)
);

CREATE TABLE desafio (
    id int PRIMARY KEY,
    titulo varchar(100),
    nivel_id int REFERENCES nivel(id)
);     

CREATE TABLE resposta (
    id int PRIMARY KEY,
    valor int,
    solucao varchar(100),
    desafio_id int REFERENCES desafio(id)
);

CREATE TABLE usuario_nivel (
    usuario_id REFERENCES usuario(id),
    nivel_id REFERENCES nivel(id)
);

CREATE TABLE usuario_desafio (
    usuario_id REFERENCES usuario(id),
    desafio_id REFERENCES desafio(id)
);

CREATE TABLE usuario_resposta (
    usuario_id REFERENCES usuario(id),
    resposta_id REFERENCES resposta(id)
);