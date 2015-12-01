INSERT INTO nivel (id, titulo, is_disponivel)
VALUES (1, 'Métodos Ágeis', 1),
       (2, 'Métodos Tradicionais', 0),
       (3, '', 0),
       (4, '', 0),
       (5, '', 0),
       (6, '', 0),
       (7, '', 0),
       (8, '', 0),
       (9, '', 0);

INSERT INTO desafio (id, titulo, is_completo, nivel_id)
VALUES (1, 'Scrum', 0, 1),
       (2, 'XP', 0, 1),
       (3, 'Kanban', 0, 1);

INSERT INTO resposta (id, valor, solucao, is_respondida, desafio_id)
VALUES -- Scrum
       (1, 40, 'Corridas', 0, 1),
       (2, 15, 'Mestre do Scrum', 0, 1),
       (3, 10, 'Dono do Produto', 0, 1),
       (4, 11, 'Time', 0, 1),
       (5, 4, 'Fluxo de Processo', 0, 1),
       (6, 9, 'Reuniões Diárias', 0, 1),
       (7, 5, 'Revisão', 0, 1),
       -- XP
       (8, 40, 'Desenvolvimento em Pares', 0, 2),
       (9, 15, 'História de Usuário', 0, 2),
       (10, 10, 'Keep It Simple', 0, 2),
       (11, 11, 'Refatoração', 0, 2),
       (12, 4, 'Testes', 0, 2),
       -- ...
       (13, 40, '', 0, 3);

INSERT INTO usuario (id, username, password, nome)
VALUES (1, 'admin', '12345', 'Administrador');