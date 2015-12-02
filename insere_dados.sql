INSERT INTO nivel (id, titulo, is_disponivel)
VALUES (1, 'Métodos Ágeis', 1),
       (2, 'Métodos Tradicionais', 0),
       (3, 'Modelagem', 0),
       (4, 'Certificação', 0),
       (5, 'Testes', 0),
       (6, '', 0);

INSERT INTO desafio (id, titulo, is_completo, nivel_id)
VALUES (1, 'Scrum', 0, 1),
       (2, 'XP', 0, 1),
       (3, 'DAS(desenvolvimento adaptativo de software)', 0, 1);
	   (4, 'Cascata', 0, 2);
	   (5, 'Desenvolvimento Incremental e Baseado em Reuso', 0, 2);
	   (6, 'Espiral', 0, 2);
	   (7, 'Análise Estruturada', 0, 3);
	   (8, 'Análise Essencial', 0, 3);
	   (9, 'UML', 0, 3);
	   (10, 'CMMI', 0, 4);
	   (11, 'MPS.BR', 0, 4);
	   (12, 'ISO/IEC 15504', 0, 4);
	   (13, 'Teste de Unidade', 0, 5);
	   (14, 'Teste de Integração', 0, 5);
	   (15, 'Teste de Aceitação', 0, 5);

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
       -- DAS(desenvolvimento adaptativo de software)
       (13, 12, 'Especulação', 0, 3);
	   (14, 17, 'Colaboração', 0, 3);
	   (15, 29, 'Aprendizado', 0, 3);
	   (16, 32, 'Feedback', 0, 3);
	   (17, 4, 'Avaliação de desempenho da equipe', 0, 3);
	   -- Cascata
       (18, 21, 'Requisitos', 0, 4);
	   (19, 18, 'Processo', 0, 4);
	   (20, 31, 'Implementação', 0, 4);
	   (21, 15, 'Teste', 0, 4);
	   (22, 9, 'Manutenção', 0, 4);
	   -- Desenvolvimento Incremental e Baseado em Reuso
       (23, 19, 'Atividades Intercaladas (Incremental)', 0, 5);
	   (24, 12, 'Feedback (Incremental)', 0, 5);
	   (25, 15, 'Minimização de Erros (Incremental)', 0, 5);
	   (26, 20, 'Entregas Rápidas (Incremental)', 0, 5);
	   (27, 11, 'Componentes Reusáveis (Orientado a Reuso)', 0, 5);
	   (28, 6, 'Integração (Orientado a Reuso)', 0, 5);
	   (29, 11, 'Analogia a Hardware (Orientado a Reuso)', 0, 5);
	   -- Espiral
       (30, 25, 'Objetivos', 0, 6);
	   (31, 10, 'Restrições', 0, 6);
	   (32, 13, 'Alternativas', 0, 6);
	   (33, 5, 'Análise de Risco', 0, 6);
	   (34, 1, 'Análise de Prototipação', 0, 6);
	   (35, 14, 'Validação', 0, 6);
	   (36, 17, 'Verificação', 0, 6);
	   (37, 9, 'Planejamento', 0, 6);
	   -- Análise Estruturada
       (38, 5, 'Modelo Ambiental', 0, 7);
	   (39, 5, 'Modelo Comportamental', 0, 7);
	   (40, 28, 'Objetos', 0, 7);
	   (41, 32, 'Diagrama', 0, 7);
	   (42, 12, 'Contexto', 0, 7);
	   (43, 8, 'Fluxo de Dados', 0, 7);
	   (44, 4, 'Dicionário de Dados', 0, 7);
	   -- Análise Essencial
       (45, 29, 'Eventos', 0, 8);
	   (46, 32, 'Fronteira', 0, 8);
	   (47, 4, 'Ferramentas do Ambiente', 0, 8);
	   (48, 12, 'Interface', 0, 8);
	   (49, 17, 'Entidade Externa', 0, 8);
	   -- UML
       (50, 12, 'Diagrama', 0, 9);
	   (51, 17, 'Classes', 0, 9);
	   (52, 29, 'Objetos', 0, 9);
	   (53, 32, 'Componentes', 0, 9);
	   (54, 4, 'Perfil', 0, 9);
	   (55, 4, 'Elementos', 0, 9);
	   (56, 4, 'Associação', 0, 9);
	   (57, 4, 'Pacote', 0, 9);
	   (58, 4, 'Semântica', 0, 9);
	   -- CMMI
       (59, 29, 'Maturidade', 0, 10);
	   (60, 32, 'Capacidade', 0, 10);
	   (61, 3, 'Gerido', 0, 10);
	   (62, 4, 'Otimizante', 0, 10);
	   (63, 8, 'Implantação', 0, 10);
	   (64, 12, 'Projetos', 0, 10);
	   (65, 6, 'SEI(Software Engineering Institute)', 0, 10);
	   -- MPS.BR
       (66, 20, 'Maturidade', 0, 11);
	   (67, 17, 'Melhoria em Processos', 0, 11);
	   (68, 6, 'Desenvolvimento', 0, 11);
	   (69, 8, 'Licitações', 0, 11);
	   (70, 8, 'Treinamento', 0, 11);
	   (71, 35, 'CMMI', 0, 11);
	   -- ISO/IEC 15504
       (72, 25, 'Spice', 0, 12);
	   (73, 8, 'Documentação', 0, 12);
	   (74, 7, 'Gestão de Configuração', 0, 12);
	   (75, 18, 'Gestão de Qualidade', 0, 12);
	   (76, 10, 'Verificação', 0, 12);
	   (77, 12, 'Validação', 0, 12);
	   (78, 14, 'Auditoria', 0, 12);
	   -- Teste de Unidade
       (79, 20, 'Válidos', 0, 13);
	   (80, 20, 'Inválidos', 0, 13);
	   (81, 11, 'Domínio', 0, 13);
	   (82, 16, 'Campos Especiais', 0, 13);
	   (83, 8, 'Senha', 0, 13);
	   (84, 19, 'Tipos de Valores', 0, 13);
	   -- Teste de Integração
       (85, 16, 'Módulos', 0, 14);
	   (86, 8, 'Grupo', 0, 14);
	   (87, 3, 'Ambiente de Produção', 0, 14);
	   (88, 12, 'Requisitos Funcionais', 0, 14);
	   (89, 25, 'Desempenho', 0, 14);
	   (90, 30, 'Confiabilidade', 0, 14);
	   -- Teste de Aceitação
       (91, 40, 'Caixa-Preta', 0, 15);
	   (92, 40, 'Usuário', 0, 15);
	   (93, 7, 'Requisitos', 0, 15);
	   (94, 1, 'Grupo Restrito', 0, 15);
	   (95, 6, 'Entradas', 0, 15);

INSERT INTO usuario (id, username, password, nome)
VALUES (1, 'admin', '12345', 'Administrador'),
       (2, 'jlennon', '12345', 'John Lennon'),
       (3, 'pmacca', '12345', 'Paul McCartney'),
       (4, 'harrison', '12345', 'George Harrison'),
       (5, 'rstarr', '12345', 'Ringo Starr');

INSERT INTO usuario_nivel (usuario_id, nivel_id)
VALUES (2, 1), -- jlennon, nivel 1
       (3, 1), -- pmacca, nivel 1
       (4, 1); -- harrison, nivel 1

INSERT INTO usuario_desafio (usuario_id, desafio_id)
VALUES (2, 1), -- jlennon, desafio 1
       (3, 1), -- pmacca, desafio 1
       (3, 2); -- pmacca, desafio 2

INSERT INTO usuario_resposta (usuario_id, resposta_id)
VALUES (3, 1), -- pmacca, desafio 1
       (3, 2), -- pmacca, desafio 2
       (3, 3), -- pmacca, desafio 3
       (3, 4), -- pmacca, desafio 4
       (3, 9), -- pmacca, desafio 9
       (3, 10); -- pmacca, desafio 10
