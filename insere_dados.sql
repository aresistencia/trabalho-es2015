INSERT INTO nivel (id, titulo)
VALUES (1, 'Métodos Ágeis'),
       (2, 'Métodos Tradicionais'),
       (3, 'Modelagem'),
       (4, 'Certificação'),
       (5, 'Testes'),
       (6, 'Nível 6');

INSERT INTO desafio (id, titulo, nivel_id)
VALUES (1, 'Scrum', 1),
       (2, 'XP', 1),
       (3, 'DAS (desenvolvimento adaptativo de software', 1),
       (4, 'Cascata', 2),
       (5, 'Desenvolvimento Incremental e Baseado em Reuso', 2),
       (6, 'Espiral', 2),
       (7, 'Análise Estruturada', 3),
       (8, 'Análise Essencial', 3),
       (9, 'UML', 3),
       (10, 'CMMI', 4),
       (11, 'MPS.BR', 4),
       (12, 'ISO/IEC 15504', 4),
       (13, 'Teste de Unidade', 5),
       (14, 'Teste de Integração', 5),
       (15, 'Teste de Aceitação', 5),
       (16, 'Desafio 16', 6),
       (17, 'Desafio 17', 6),
       (18, 'Desafio 18', 6);

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
       (23, 19, 'Atividades Intercaladas (Incremental)', 5),
       (24, 12, 'Feedback (Incremental)', 5),
       (25, 15, 'Minimização de Erros (Incremental)', 5),
       (26, 20, 'Entregas Rápidas (Incremental)', 5),
       (27, 11, 'Componentes Reusáveis (Orientado a Reuso)', 5),
       (28, 6, 'Integração (Orientado a Reuso)', 5),
       (29, 11, 'Analogia a Hardware (Orientado a Reuso)', 5),
       -- Espiral
       (30, 25, 'Objetivos', 6),
       (31, 10, 'Restrições', 6),
       (32, 13, 'Alternativas', 6),
       (33, 5, 'Análise de Risco', 6),
       (34, 1, 'Análise de Prototipação', 6),
       (35, 14, 'Validação', 6),
       (36, 17, 'Verificação', 6),
       (37, 9, 'Planejamento', 6),
       -- Análise Estruturada
       (38, 5, 'Modelo Ambiental', 7),
       (39, 5, 'Modelo Comportamental', 7),
       (40, 28, 'Objetos', 7),
       (41, 32, 'Diagrama', 7),
       (42, 12, 'Contexto', 7),
       (43, 8, 'Fluxo de Dados', 7),
       (44, 4, 'Dicionário de Dados', 7),
       -- Análise Essencial
       (45, 29, 'Eventos', 8),
       (46, 32, 'Fronteira', 8),
       (47, 4, 'Ferramentas do Ambiente', 8),
       (48, 12, 'Interface', 8),
       (49, 17, 'Entidade Externa', 8),
       -- UML
       (50, 12, 'Diagrama', 9),
       (51, 17, 'Classes', 9),
       (52, 29, 'Objetos', 9),
       (53, 32, 'Componentes', 9),
       (54, 4, 'Perfil', 9),
       (55, 4, 'Elementos', 9),
       (56, 4, 'Associação', 9),
       (57, 4, 'Pacote', 9),
       (58, 4, 'Semântica', 9),
       -- CMMI
       (59, 29, 'Maturidade', 10),
       (60, 32, 'Capacidade', 10),
       (61, 3, 'Gerido', 10),
       (62, 4, 'Otimizante', 10),
       (63, 8, 'Implantação', 10),
       (64, 12, 'Projetos', 10),
       (65, 6, 'SEI(Software Engineering Institute)', 10),
       -- MPS.BR
       (66, 20, 'Maturidade', 11),
       (67, 17, 'Melhoria em Processos', 11),
       (68, 6, 'Desenvolvimento', 11),
       (69, 8, 'Licitações', 11),
       (70, 8, 'Treinamento', 11),
       (71, 35, 'CMMI', 11),
       -- ISO/IEC 15504
       (72, 25, 'Spice', 12),
       (73, 8, 'Documentação', 12),
       (74, 7, 'Gestão de Configuração', 12),
       (75, 18, 'Gestão de Qualidade', 12),
       (76, 10, 'Verificação', 12),
       (77, 12, 'Validação', 12),
       (78, 14, 'Auditoria', 12),
       -- Teste de Unidade
       (79, 20, 'Válidos', 13),
       (80, 20, 'Inválidos', 13),
       (81, 11, 'Domínio', 13),
       (82, 16, 'Campos Especiais', 13),
       (83, 8, 'Senha', 13),
       (84, 19, 'Tipos de Valores', 13),
       -- Teste de Integração
       (85, 16, 'Módulos', 14),
       (86, 8, 'Grupo', 14),
       (87, 3, 'Ambiente de Produção', 14),
       (88, 12, 'Requisitos Funcionais', 14),
       (89, 25, 'Desempenho', 14),
       (90, 30, 'Confiabilidade', 14),
       -- Teste de Aceitação
       (91, 40, 'Caixa-Preta', 15),
       (92, 40, 'Usuário', 15),
       (93, 7, 'Requisitos', 15),
       (94, 1, 'Grupo Restrito', 15),
       (95, 6, 'Entradas', 15),
       -- Desafio 16 
       (96, 40, 'Resposta 78', 16),
       (97, 40, 'Resposta 79', 16),
       (98, 40, 'Resposta 80', 16),
       (99, 40, 'Resposta 81', 16),
       (100, 40, 'Resposta 82', 16),
       -- Desafio 17 
       (101, 40, 'Resposta 83', 17),
       (102, 40, 'Resposta 84', 17),
       (103, 40, 'Resposta 85', 17),
       (104, 40, 'Resposta 86', 17),
       (105, 40, 'Resposta 87', 17),
       -- Desafio 18 
       (106, 40, 'Resposta 88', 18),
       (107, 40, 'Resposta 89', 18),
       (108, 40, 'Resposta 90', 18),
       (109, 40, 'Resposta 91', 18),
       (110, 40, 'Resposta 92', 18);