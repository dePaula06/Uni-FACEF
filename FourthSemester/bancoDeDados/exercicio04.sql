CREATE DATABASE Exercicio04;
GO

USE Exercicio04;
GO

CREATE TABLE Departamentos(
	cod INT CONSTRAINT pkDepartamento PRIMARY KEY IDENTITY(1, 1),
	nome VARCHAR(100) NOT NULL,
	descDepartamento VARCHAR(250),
	-- Adicionar constraint depois
)

CREATE TABLE Funcionarios(
	cod INT 
	CONSTRAINT pkFuncionario PRIMARY KEY IDENTITY(1, 1),
	nome VARCHAR(100) NOT NULL,
	cpf VARCHAR(11) 
	CONSTRAINT CPFUnico UNIQUE,
	rg VARCHAR(10) 
	CONSTRAINT RGUnico UNIQUE,
	sexo CHAR(1) 
	CONSTRAINT listSexo CHECK(sexo in('M', 'F')),
	categoria VARCHAR(50) 
	CONSTRAINT listCategoria CHECK(categoria in('Auxiliar', 'Supervisor', 'Terceirizado', 'Contratado', 'Coordenador')),
	idade INT 
	CONSTRAINT limiteIdade CHECK(idade between 16 and 65),
	codDepartamento INT 
	CONSTRAINT fkCpdDepartamento 
	FOREIGN KEY REFERENCES Departamentos(cod)
)

CREATE TABLE Projetos(
	cod INT CONSTRAINT pkProjetos PRIMARY KEY IDENTITY(100, 1),
	nome VARCHAR(100) NOT NULL,
	descProjeto VARCHAR(300)
)

CREATE TABLE FuncProjeto(
	cod INT CONSTRAINT fkFuncProjeto PRIMARY KEY IDENTITY(1, 1),
	codFunc INT
	CONSTRAINT fkFunc FOREIGN KEY REFERENCES Funcionarios(cod) NOT NULL,
	codProjeto INT
	CONSTRAINT fkProj FOREIGN KEY REFERENCES Projetos(cod) NOT NULL,
	dataInicio datetime,
	dataFim datetime,

	CONSTRAINT datas CHECK(dataInicio <= dataFim)
)

INSERT INTO Departamentos (nome, descDepartamento)
VALUES
('CONTAS A PAGAR', 'Responsável pelo controle e pagamento das obrigações da empresa'),
('CONTAS A RECEBER', 'Responsável pelo controle dos recebimentos da empresa'),
('FATURAMENTO', 'Responsável pela emissão e controle de notas fiscais'),
('VENDAS', 'Responsável pelas vendas e relacionamento com clientes'),
('COMPRAS', 'Responsável pela aquisição de produtos e materiais');

INSERT INTO Funcionarios 
(nome, cpf, rg, sexo, categoria, idade, codDepartamento)
VALUES
('Carlos Eduardo Silva', '12345678901', 'MG1234567', 'M', 'Supervisor', 35, 1),
('Ana Beatriz Souza', '23456789012', 'MG2345678', 'F', 'Coordenador', 42, 1),
('João Pedro Oliveira', '34567890123', 'MG3456789', 'M', 'Contratado', 28, 2),
('Mariana Costa Santos', '45678901234', 'MG4567890', 'F', 'Auxiliar', 23, 2),
('Rafael Almeida Lima', '56789012345', 'MG5678901', 'M', 'Supervisor', 39, 3),
('Juliana Ferreira Alves', '67890123456', 'MG6789012', 'F', 'Contratado', 31, 3),
('Lucas Henrique Martins', '78901234567', 'MG7890123', 'M', 'Auxiliar', 20, 4),
('Camila Rodrigues Dias', '89012345678', 'MG8901234', 'F', 'Coordenador', 45, 4),
('Felipe Augusto Pereira', '90123456789', 'MG9012345', 'M', 'Terceirizado', 37, 5),
('Beatriz Martins Rocha', '01234567890', 'MG0123456', 'F', 'Auxiliar', 19, 5);

alter table Departamentos
add
codGerente INT constraint fkCodGerente FOREIGN KEY REFERENCES Funcionarios(cod)

SELECT * FROM Departamentos;

INSERT INTO Projetos (nome, descProjeto)
VALUES
('Implantação do Sistema Financeiro', 'Desenvolvimento e implantação de um sistema para controle financeiro'),
('Automação do Faturamento', 'Automatização dos processos de emissão e controle de notas fiscais'),
('Expansão Comercial', 'Projeto voltado para expansão das vendas e conquista de novos clientes'),
('Gestão de Compras', 'Desenvolvimento de processos para controle e gerenciamento de compras'),
('Integração de Sistemas', 'Integração dos sistemas internos para centralização das informações');

INSERT INTO FuncProjeto(codFunc, codProjeto, dataInicio, dataFim)
	VALUES
		(2, 103, '01/08/2025', '12/09/2025'),
		(5, 101, '07/05/2025', '12/11/2025'),
		(3, 100, '07/02/2025', '12/03/2025')

SELECT * FROM Funcionarios;
SELECT * FROM Projetos;

SELECT * FROM Departamentos;

UPDATE Departamentos SET codGerente = 2;

ALTER TABLE Funcionarios
ADD
cidadeFunc VARCHAR(100) 
CONSTRAINT defaultCidade DEFAULT('Franca')

INSERT INTO Funcionarios 
(nome, cpf, rg, sexo, categoria, idade, codDepartamento)
VALUES
('Carlos Eduardo Souza', '12345677852', 'PK1234567', 'M', 'Supervisor', 29, 1)

INSERT INTO Funcionarios 
(nome, cpf, rg, sexo, categoria, idade)
VALUES
('Pedrão', '12342077852', 'PK8354567', 'M', 'Supervisor',18 )



INSERT INTO Projetos (nome, descProjeto)
VALUES
('Implantação de um novo sistema de vendas', 'Desenvolvimento e implantação de um sistema para os supervisores de venda utilizarem')

SELECT * FROM Projetos;


INSERT INTO FuncProjeto(codFunc, codProjeto, dataInicio, dataFim)
	VALUES
	(4, 104, '03-08-2026', '07-08-2026'),
	(3, 104, '03-09-2026', '07-09-2026'),
	(6, 104, '03-09-2026', '07-09-2026')

SELECT * FROM FuncProjeto;

SELECT * FROM Funcionarios;

Update Funcionarios SET codDepartamento = 3
WHERE codDepartamento IS NULL

ALTER TABLE Departamentos
ADD CONSTRAINT defaultDescDepartamento
DEFAULT ('Sem descrição') FOR descDepartamento;

ALTER TABLE Projetos
ADD CONSTRAINT defaultDescProjeto
DEFAULT ('Sem descrição') FOR descProjeto;

-- 1
SELECT f.nome, f.cpf, d.nome FROM Funcionarios AS f
INNER JOIN Departamentos AS d 
ON f.codDepartamento = d.cod;

-- 2
SELECT f.nome FROM Funcionarios AS f
LEFT JOIN Departamentos AS d
ON f.cod = d.codGerente
WHERE d.codGerente IS NULL

-- 3
SELECT COUNT(f.cod) FROM Funcionarios f
INNER JOIN Departamentos AS d ON f.codDepartamento = d.cod
WHERE d.nome = 'COMPRAS' AND f.categoria = 'Auxiliar'

-- 4
SELECT f.nome, f.cpf FROM Funcionarios AS f
INNER JOIN FuncProjeto AS p ON f.cod = p.codFunc
WHERE p.dataInicio > '31-07-2026' AND p.dataInicio < '01-09-2026'

-- 5
SELECT f.nome, d.nome FROM Funcionarios AS f
INNER JOIN Departamentos AS d ON f.cod = d.codGerente

-- 6
SELECT MAX(f.idade) AS maiorIdade,
	   AVG(f.idade) AS idadeMedia
	FROM Funcionarios AS f
	INNER JOIN Departamentos AS d 
	ON f.codDepartamento = d.cod
	WHERE d.nome IN ('FATURAMENTO', 'VENDAS', 'COMPRAS')

-- 7
	SELECT f.nome, Projetos.nome, Projetos.descProjeto FROM Funcionarios AS f
	INNER JOIN FuncProjeto AS p ON f.cod = p.codFunc
	INNER JOIN Projetos ON Projetos.cod = p.codProjeto

-- 8
SELECT 
    f.nome AS Funcionario,
    d.nome AS Departamento,
    g.nome AS Gerente
FROM Funcionarios AS f
INNER JOIN Departamentos AS d
    ON f.codDepartamento = d.cod
INNER JOIN Funcionarios AS g
    ON d.codGerente = g.cod
ORDER BY 
    d.nome ASC,
    f.nome ASC;
	