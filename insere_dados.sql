INSERT INTO nivel (id, titulo)
VALUES (1, 'Métodos Ágeis'),
       (2, 'Métodos Tradicionais'),
       (3, 'Nível 3'),
       (4, 'Nível 4'),
       (5, 'Nível 5'),
       (6, 'Nível 6');

INSERT INTO desafio (id, titulo, nivel_id)
VALUES (1, 'Scrum', 1),
       (2, 'XP', 1),
       (3, 'Kanban', 1),
       (4, 'Desafio 4', 2),
       (5, 'Desafio 5', 2),
       (6, 'Desafio 6', 2);

INSERT INTO resposta (id, valor, solucao, desafio_id)
VALUES -- Scrum
       (1, 40, 'Corridas', 1),
       (2, 15, 'Mestre do Scrum', 1),
       (3, 10, 'Dono do Produto', 1),
       (4, 11, 'Time', 1),
       (5, 4, 'Fluxo de Processo', 1),
       (6, 9, 'Reuniões Diárias', 1),
       (7, 5, 'Revisão', 1),
       -- XP
       (8, 40, 'Desenvolvimento em Pares', 2),
       (9, 15, 'História de Usuário', 2),
       (10, 10, 'Keep It Simple', 2),
       (11, 11, 'Refatoração', 2),
       (12, 4, 'Testes', 2),
       -- ...
       (13, 40, '', 3);

INSERT INTO usuario (id, username, password, nome)
VALUES (1, 'admin', '12345', 'Administrador'),
       (2, 'jlennon', '12345', 'John Lennon'),
       (3, 'pmacca', '12345', 'Paul McCartney'),
       (4, 'harrison', '12345', 'George Harrison'),
       (5, 'ringo', '12345', 'Ringo Starr');

INSERT INTO usuario_nivel (usuario_id, nivel_id)
VALUES (2, 1), -- jlennon, nivel 1
       (3, 1), -- pmacca, nivel 1
       (4, 1), -- harrison, nivel 1
       (5, 1), -- ringo, nivel 1
       (3, 2); -- pmacca, nivel 2

INSERT INTO usuario_desafio (usuario_id, desafio_id)
VALUES (2, 1), -- jlennon, desafio 1
       (3, 1), -- pmacca, desafio 1
       (3, 2), -- pmacca, desafio 2
       (3, 3), -- pmacca, desafio 3
       (3, 6), -- pmacca, desafio 6
       (4, 1), -- harrison, desafio 1
       (5, 2); -- ringo, desafio 2

INSERT INTO usuario_resposta (usuario_id, resposta_id)
VALUES (3, 1), -- pmacca, resposta 1
       (3, 2), -- pmacca, resposta 2
       (3, 3), -- pmacca, resposta 3
       (3, 4), -- pmacca, resposta 4
       (3, 5), -- pmacca, resposta 5
       (3, 6), -- pmacca, resposta 6
       (3, 7), -- pmacca, resposta 7
       (3, 9), -- pmacca, resposta 9
       (3, 10); -- pmacca, resposta 10