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