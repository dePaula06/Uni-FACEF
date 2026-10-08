CREATE DATABASE Times
GO

USE Times
GO

-- ============================================================
-- 1. CRIAÇÃO DAS TABELAS
-- ============================================================

-- Tabela que armazena os times
CREATE TABLE Time (
    idTime INT CONSTRAINT PK_TIME PRIMARY KEY IDENTITY(1,1),
    nome VARCHAR(50) NOT NULL,
    cidade VARCHAR(50),
    estado VARCHAR(2),
    anoFundacao INT
);

-- Tabela que armazena os jogadores
CREATE TABLE Jogador (
    idJogador INT CONSTRAINT PK_JOGADOR PRIMARY KEY IDENTITY(1,1),
    nome VARCHAR(80) NOT NULL,
    apelido VARCHAR(40),
    posicao VARCHAR(30),
    salario DECIMAL(10,2),
    dataNascimento DATE,
    numeroCamisa INT,
    idTime INT,

    -- Chave estrangeira que relaciona o jogador ao seu time
    CONSTRAINT FK_TIME_JOGADOR 
        FOREIGN KEY (idTime) REFERENCES Time(idTime)
);


-- ============================================================
-- 2. INSERÇÃO DOS DADOS
-- ============================================================

-- Inserindo os times
INSERT INTO Time (nome, cidade, estado, anoFundacao)
VALUES
('Flamengo', 'Rio de Janeiro', 'RJ', 1895),
('Palmeiras', 'São Paulo', 'SP', 1914),
('Corinthians', 'São Paulo', 'SP', 1910),
('São Paulo', 'São Paulo', 'SP', 1930),
('Cruzeiro', 'Belo Horizonte', 'MG', 1921),
('Grêmio', 'Porto Alegre', 'RS', 1903);


-- Inserindo os jogadores
-- O idTime corresponde ao ID gerado para cada time
INSERT INTO Jogador
(nome, apelido, posicao, salario, dataNascimento, numeroCamisa, idTime)
VALUES
('Marcelo Santos', 'Marcelinho', 'Atacante', 85000, '1998-05-12', 9, 1),
('Bruno Oliveira', NULL, 'Goleiro', 55000, '1995-08-20', 1, 1),
('Lucas Almeida', 'Luquinha', 'Meia', 72000, '2000-03-15', 10, 1),
('Matheus Silva', NULL, 'Zagueiro', 60000, '1997-11-02', 4, 1),

('Gabriel Souza', 'Biel', 'Atacante', 92000, '1999-01-25', 11, 2),
('Pedro Martins', 'Pedrinho', 'Meia', 78000, '2001-06-17', 8, 2),
('Rafael Costa', NULL, 'Zagueiro', 63000, '1996-09-08', 3, 2),
('Carlos Mendes', NULL, 'Goleiro', 58000, '1994-12-11', 1, 2),

('Marcos Ferreira', 'Marcão', 'Zagueiro', 67000, '1995-04-30', 4, 3),
('Felipe Rocha', NULL, 'Atacante', 88000, '2000-07-21', 9, 3),
('André Lima', 'Dedé', 'Meia', 74000, '1998-02-14', 10, 3),

('Rodrigo Alves', NULL, 'Goleiro', 52000, '1993-10-05', 1, 4),
('Miguel Ribeiro', 'Migué', 'Atacante', 95000, '2002-05-19', 7, 4),
('Daniel Barbosa', NULL, 'Meia', 76000, '1999-08-09', 8, 4),

('Eduardo Lopes', 'Dudu', 'Atacante', 81000, '1997-03-22', 11, 5),
('Henrique Gomes', NULL, 'Zagueiro', 59000, '1996-01-18', 3, 5),
('Gustavo Moraes', 'Guga', 'Meia', 70000, '2001-09-27', 10, 5),

('Leonardo Nunes', 'Leo', 'Goleiro', 50000, '1995-06-16', 1, 6),
('Thiago Cardoso', NULL, 'Atacante', 83000, '1998-12-03', 9, 6),
('Murilo Teixeira', 'Muri', 'Meia', 69000, '2000-10-10', 8, 6);


-- ============================================================
-- 3. FUNÇÕES DE AGREGAÇÃO E GROUP BY
-- ============================================================

-- Sempre que utilizarmos uma função de agregação
-- junto com um campo normal no SELECT,
-- o campo normal deve aparecer no GROUP BY.

-- COUNT() -> conta a quantidade de registros
-- Mostra a quantidade de jogadores por posição
SELECT 
    posicao,
    COUNT(*) AS qtdeTotal
FROM Jogador
GROUP BY posicao;


-- AVG() -> calcula a média
-- Mostra a média salarial de cada posição
SELECT 
    posicao,
    AVG(salario) AS mediaSalarial
FROM Jogador
GROUP BY posicao;


-- ============================================================
-- 4. LIKE
-- ============================================================

-- O LIKE é utilizado para realizar pesquisas por padrões de texto.

-- % representa qualquer quantidade de caracteres.

-- Começa com "M"
SELECT *
FROM Jogador
WHERE nome LIKE 'M%';


-- Termina com "Silva"
SELECT *
FROM Jogador
WHERE nome LIKE '%Silva';


-- Contém "el" em qualquer parte do nome
SELECT *
FROM Jogador
WHERE nome LIKE '%el%';


-- ============================================================
-- 5. UPPER E LOWER
-- ============================================================

-- UPPER() transforma o texto em letras maiúsculas.
-- LOWER() transforma o texto em letras minúsculas.

SELECT 
    nome,
    UPPER(nome) AS nomeMaiusculo,
    LOWER(nome) AS nomeMinusculo
FROM Jogador;


-- ============================================================
-- 6. LEFT, RIGHT E SUBSTRING
-- ============================================================

-- LEFT() retorna os primeiros caracteres do texto.
-- LEFT(campo, quantidade)

SELECT 
    nome,
    LEFT(nome, 5) AS primeirosCaracteres
FROM Jogador;


-- RIGHT() retorna os últimos caracteres do texto.
-- RIGHT(campo, quantidade)

SELECT
    nome,
    RIGHT(nome, 5) AS ultimosCaracteres
FROM Jogador;


-- SUBSTRING() retorna uma parte do texto.
-- Sintaxe:
-- SUBSTRING(campo, posiçãoInicial, quantidadeDeCaracteres)

SELECT 
    nome,
    LEFT(nome, 5) AS primeirosCaracteres,
    RIGHT(nome, 5) AS ultimosCaracteres,
    SUBSTRING(nome, 3, 5) AS parteNome
FROM Jogador;


-- ============================================================
-- 7. DATA E HORA
-- ============================================================

-- GETDATE() retorna a data e hora atual do servidor.

SELECT GETDATE() AS dataHoraAtual;


-- Podemos utilizar GETDATE() junto com outros campos.
SELECT
    nome,
    dataNascimento,
    GETDATE() AS dataHoraAtual
FROM Jogador;


-- Define o formato utilizado para interpretar datas
-- digitadas no padrão brasileiro:
-- DIA / MÊS / ANO

SET DATEFORMAT DMY;


-- ============================================================
-- 8. ISNULL
-- ============================================================

-- ISNULL() substitui um valor NULL por outro valor.
--
-- Sintaxe:
-- ISNULL(campo, valorSubstituto)

-- Neste caso, jogadores sem apelido aparecerão
-- como "SEM APELIDO".

SELECT 
    nome,
    ISNULL(apelido, 'SEM APELIDO') AS apelido
FROM Jogador;


-- Podemos utilizar ISNULL() também dentro do WHERE.
-- Aqui, os jogadores que possuem apelido NULL
-- serão tratados como se tivessem o valor "x".

SELECT *
FROM Jogador
WHERE ISNULL(apelido, 'x') = 'x';


-- ============================================================
-- 9. TOP E ORDER BY
-- ============================================================

-- TOP limita a quantidade de registros retornados.

-- DESC = ordem decrescente
-- Mostra os 5 jogadores com os maiores salários.

SELECT TOP 5
    nome,
    salario
FROM Jogador
ORDER BY salario DESC;


-- ASC = ordem crescente
-- Mostra os 3 jogadores com os menores salários.

SELECT TOP 3
    nome,
    salario
FROM Jogador
ORDER BY salario ASC;


-- ============================================================
-- 10. FUNÇÕES DE AGREGAÇÃO COM GROUP BY
-- ============================================================

-- Podemos utilizar várias funções de agregação
-- no mesmo SELECT.
--
-- COUNT() -> quantidade
-- MIN()   -> menor valor
-- MAX()   -> maior valor
-- AVG()   -> média

-- Aqui estamos agrupando os jogadores por posição
-- e calculando informações sobre o salário de cada posição.

SELECT
    posicao,
    COUNT(*) AS quantidade,
    MIN(salario) AS menorSalario,
    MAX(salario) AS maiorSalario,
    AVG(salario) AS mediaSalarial
FROM Jogador
GROUP BY posicao;


-- ============================================================
-- 11. SUBCONSULTA
-- ============================================================

-- A subconsulta calcula primeiro a média salarial
-- de TODOS os jogadores.
--
-- Depois, a consulta principal retorna somente os
-- jogadores que possuem salário maior que essa média.

SELECT 
    nome,
    salario
FROM Jogador
WHERE salario > (
    SELECT AVG(salario)
    FROM Jogador
);


-- ============================================================
-- 12. INNER JOIN
-- ============================================================

-- INNER JOIN é utilizado para relacionar registros
-- de duas ou mais tabelas.
--
-- Neste caso:
-- Time possui o ID do time.
-- Jogador possui uma chave estrangeira idTime.
--
-- O ON define como as duas tabelas serão relacionadas.

-- t e j são apelidos (aliases) das tabelas:
-- t = Time
-- j = Jogador

-- Mostra cada time e a quantidade de jogadores
-- relacionados a ele.

SELECT
    t.nome AS time,
    COUNT(*) AS quantidadeJogadores
FROM Time t
INNER JOIN Jogador j
    ON t.idTime = j.idTime
GROUP BY t.nome;


-- ============================================================
-- 13. INNER JOIN + WHERE + GROUP BY
-- ============================================================

-- WHERE é utilizado para filtrar registros ANTES
-- da realização do agrupamento.

-- Neste exemplo:
-- 1. Relacionamos Time e Jogador.
-- 2. Selecionamos somente jogadores com salário > 70000.
-- 3. Agrupamos os jogadores por time.
-- 4. Calculamos a média salarial de cada time.

SELECT 
    t.nome AS time,
    AVG(j.salario) AS mediaSalarial
FROM Time t
INNER JOIN Jogador j
    ON t.idTime = j.idTime
WHERE j.salario > 70000
GROUP BY t.nome;


-- ============================================================
-- 14. TOP + WHERE + ORDER BY
-- ============================================================

-- WHERE filtra os registros.
-- Neste caso, somente jogadores com salário maior que 50000.
--
-- ORDER BY salario ASC organiza os resultados
-- do menor salário para o maior.
--
-- TOP 3 retorna somente os 3 primeiros registros
-- depois da ordenação.

-- Portanto, retorna os 3 jogadores com os menores
-- salários entre aqueles que ganham mais de 50000.

SELECT TOP 3 
    nome
FROM Jogador
WHERE salario > 50000
ORDER BY salario ASC;


-- ============================================================
-- 15. HAVING
-- ============================================================

-- HAVING é utilizado para filtrar GRUPOS.
--
-- WHERE  -> filtra registros antes do GROUP BY
-- HAVING  -> filtra grupos depois do GROUP BY
--
-- Neste exemplo:
-- 1. Relacionamos os times aos jogadores.
-- 2. Agrupamos os jogadores por time.
-- 3. Contamos quantos jogadores cada time possui.
-- 4. Mostramos somente os times com mais de 3 jogadores.

SELECT
    t.nome AS time,
    COUNT(*) AS quantidadeJogadores
FROM Time t
INNER JOIN Jogador j
    ON t.idTime = j.idTime
GROUP BY t.nome
HAVING COUNT(*) > 3;


-- ============================================================
-- 16. HAVING + FUNÇÃO DE AGREGAÇÃO
-- ============================================================

-- Podemos utilizar funções de agregação dentro do HAVING.
--
-- Neste exemplo:
-- 1. Os jogadores são agrupados por posição.
-- 2. Calculamos a média salarial de cada posição.
-- 3. O HAVING mantém somente as posições
--    cuja média salarial seja maior que 70000.

SELECT 
    posicao,
    AVG(salario) AS mediaSalarial
FROM Jogador
GROUP BY posicao
HAVING AVG(salario) > 70000;


-- ============================================================
-- 17. WHERE X HAVING
-- ============================================================

-- WHERE filtra REGISTROS antes do agrupamento.
--
-- HAVING filtra GRUPOS depois do agrupamento.
--
-- Exemplo:
--
-- WHERE salario > 70000
-- -> elimina jogadores que ganham 70000 ou menos
--    antes de realizar o GROUP BY.
--
-- HAVING AVG(salario) > 70000
-- -> primeiro calcula a média de cada grupo
--    e depois elimina os grupos cuja média
--    seja menor ou igual a 70000.

-- =============================================================
-- 18. SUBSELECT COM IN
-- Jogadores dos times dos estados de SP
-- =============================================================

-- Execute primeiro apenas o subselect para visualizar o resultado:
SELECT idTime
FROM Time
WHERE Estado = 'SP'

SELECT * 
FROM  Jogador
WHERE idTime IN (
    SELECT idTime
    FROM Time
    WHERE Estado = 'SP'
    )

SELECT j.* FROM Jogador j
INNER JOIN Time t
ON j.idTime = t.idTime
WHERE t.estado = 'SP'

-- =============================================================
-- 19. SUBSELECT COM NOT IN
-- Jogadores dos times dos estados de SP
-- =============================================================

SELECT * 
FROM  Jogador
WHERE idTime NOT IN (
    SELECT idTime
    FROM Time
    WHERE Estado = 'SP'
    )

SELECT j.* FROM Jogador j
INNER JOIN Time t
ON j.idTime = t.idTime
WHERE t.estado != 'SP'