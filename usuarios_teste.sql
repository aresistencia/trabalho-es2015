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
VALUES (2, 1), -- jlennon, resposta 1
       (2, 2), -- jlennon, resposta 2
       (2, 3), -- jlennon, resposta 3
       (2, 4), -- jlennon, resposta 4
       (2, 5), -- jlennon, resposta 5
       (2, 6), -- jlennon, resposta 6
       (2, 7), -- jlennon, resposta 7
       (2, 8), -- jlennon, resposta 8
       (2, 9), -- jlennon, resposta 9
       (3, 1), -- pmacca, resposta 1
       (3, 2), -- pmacca, resposta 2
       (3, 3), -- pmacca, resposta 3
       (3, 4), -- pmacca, resposta 4
       (3, 5), -- pmacca, resposta 5
       (3, 6), -- pmacca, resposta 6
       (3, 7), -- pmacca, resposta 7
       (3, 8), -- pmacca, resposta 8
       (3, 9), -- pmacca, resposta 9
       (3, 10), -- pmacca, resposta 10
       (3, 11), -- pmacca, resposta 11
       (3, 12), -- pmacca, resposta 12
       (3, 13), -- pmacca, resposta 13
       (3, 14), -- pmacca, resposta 14
       (3, 15), -- pmacca, resposta 15
       (3, 16), -- pmacca, resposta 16
       (3, 17), -- pmacca, resposta 17
       (3, 18), -- pmacca, resposta 18
       (3, 19), -- pmacca, resposta 19
       (3, 20), -- pmacca, resposta 20
       (3, 21), -- pmacca, resposta 21
       (3, 22), -- pmacca, resposta 22
       (4, 1), -- harrison, resposta 1
       (4, 2), -- harrison, resposta 2
       (4, 3), -- harrison, resposta 3
       (4, 4), -- harrison, resposta 4
       (4, 5), -- harrison, resposta 5
       (4, 6), -- harrison, resposta 6
       (4, 7), -- harrison, resposta 7
       (4, 8), -- harrison, resposta 8
       (4, 10), -- harrison, resposta 10
       (5, 3), -- ringo, resposta 3
       (5, 4), -- ringo, resposta 4
       (5, 8), -- ringo, resposta 8
       (5, 9), -- ringo, resposta 9
       (5, 10), -- ringo, resposta 10
       (5, 11), -- ringo, resposta 11
       (5, 12); -- ringo, resposta 12
