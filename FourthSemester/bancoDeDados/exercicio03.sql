-- EXERCÍCIO 03.1
CREATE DATABASE Exercicio03Restricoes;
GO

USE Exercicio03Restricoes;

CREATE TABLE Cliente(
	codCliente INT CONSTRAINT pkCliente PRIMARY KEY IDENTITY(1, 1),
	nome VARCHAR(50) NOT NULL,
	telefone VARCHAR(20) NOT NULL,
	tipoCliente VARCHAR(20) CHECK(
		tipoCliente IN ('Titular', 'Dependente')
	) NOT NULL,
	dataCadastro DATETIME DEFAULT(GETDATE()) NOT NULL,
	numDependentes INT CHECK(numDependentes >= 0 AND numDependentes <= 3) NOT NULL 
)

------------------------------------------------------------------------------------------

-- alter table tb_cliente
-- add
-- constraint pkCliente primary key(cod)

-- alter table tb_cliente
-- add
-- constraint df_data default(getdate()) for dt_cadastro

-- alter table tb_cliente
-- add
-- constraint chkNrDep check(nrDependentes between 0 and 33

---------------------------------------------------------------------------------------------

-- TESTE: Não colocar nome
-- INSERT INTO Cliente(telefone, tipoCliente, numDependentes)
--	VALUES
--	('16987542368', 'Titular', 3)

-- TESTE: Não colocar telefone
-- INSERT INTO Cliente(nome, tipoCliente, numDependentes)
-- VALUES('Pedro', 'Dependente', 0)

-- TESTE: Colocar tipo de cliente não existente
-- INSERT INTO Cliente(nome, telefone, tipoCliente, numDependentes)
-- VALUES ('Pedro', '16985476325', 'Colaborador', 2)

-- TESTE: Número de dependentes fora do aceito
-- INSERT INTO Cliente(nome, telefone, tipoCliente, numDependentes)
-- VALUES('Pedro', '16985476325', 'Titular', 5)

INSERT INTO Cliente(nome, telefone, tipoCliente, numDependentes)
 VALUES('Pedro', '16985476325', 'Titular', 2)

SELECT * FROM CLIENTE;

-- EXERCÍCIO 03.2

CREATE DATABASE Exercicio03Restricoes_2;
GO

USE Exercicio03Restricoes_2;

CREATE TABLE Marca(
	idMarca INT CONSTRAINT pkMarca PRIMARY KEY IDENTITY(1, 1),
	nome VARCHAR(100) CONSTRAINT nomeMarca UNIQUE
)

CREATE TABLE Produto(
	idPro INT CONSTRAINT pkPro CHECK(
	idPro >=1000 AND idPro <= 9999) PRIMARY KEY IDENTITY(1000, 1),
	nomeProduto VARCHAR(100) NOT NULL,
	idMarca INT CONSTRAINT fkMarca FOREIGN KEY REFERENCES Marca(idMarca),
	estoque INT CHECK(estoque >= 0),
	preco money CHECK(preco >=1)
)

CREATE TABLE Pedido(
	idPedido INT CONSTRAINT pkPedido PRIMARY KEY IDENTITY(1, 1),
	dataPedido DATETIME DEFAULT(GETDATE()),
	valorDesc money,
	valorTotal money
)

CREATE TABLE ItemPedido(
	idItemPedido INT CONSTRAINT pkItemPedido PRIMARY KEY IDENTITY(1, 1),
	idPedido INT CONSTRAINT fkPedido FOREIGN KEY REFERENCES Pedido(idPedido),
	idPro INT CONSTRAINT fkProduto FOREIGN KEY REFERENCES Produto(idPro),
	qtde INT,
	valorUnit money
)

ALTER TABLE ItemPedido
	ADD
	CONSTRAINT restricao06 CHECK
	(
		(valorUnit > 1000 AND qtde < 100) OR (valorUnit <= 1000)
	)


ALTER TABLE Produto
	ADD 
	CONSTRAINT restricao07 CHECK
	(
		(estoque * preco < 250000)
	)

ALTER TABLE ItemPedido
ADD CONSTRAINT restricao05 UNIQUE (idPedido, idPro);

-- Testes

INSERT INTO Marca (nome)
VALUES
('Nike'),
('Adidas'),
('Puma');

-- INSERT INTO Marca (nome)
-- VALUES ('Nike');

INSERT INTO Produto (nomeProduto, idMarca, estoque, preco)
VALUES
('Tênis Air', 1, 50, 350),
('Camiseta Esportiva', 2, 100, 80),
('Mochila', 3, 30, 150);

SELECT * FROM Produto;

-- INSERT INTO Produto (nomeProduto, idMarca, estoque, preco)
-- VALUES ('Produto Inválido', 1, 10, 0);

INSERT INTO Produto (nomeProduto, idMarca, estoque, preco)
VALUES ('Produto Inválido', 1, 10, 3);

-- INSERT INTO Produto (nomeProduto, idMarca, estoque, preco)
-- VALUES ('Produto Inválido', 1, -5, 100);

-- INSERT INTO Produto (nomeProduto, idMarca, estoque, preco)
-- VALUES ('Produto Teste', 999, 10, 100);

INSERT INTO Produto (nomeProduto, idMarca, estoque, preco)
VALUES ('Produto Teste', 1, 10, 100);

INSERT INTO Produto (nomeProduto, idMarca, estoque, preco)
VALUES ('Produto Válido', 1, 100, 1000);

-- RESTRIÇÃO 007
-- INSERT INTO Produto (nomeProduto, idMarca, estoque, preco)
-- VALUES ('Produto Inválido', 1, 500, 500);

INSERT INTO Pedido (valorDesc, valorTotal)
VALUES (20, 330);

SELECT * FROM Pedido;

INSERT INTO ItemPedido (idPedido, idPro, qtde, valorUnit)
VALUES (1, 1000, 2, 350);

SELECT * FROM ItemPedido;

-- INSERT INTO ItemPedido (idPedido, idPro, qtde, valorUnit)
-- VALUES (999, 1000, 2, 350);

-- INSERT INTO ItemPedido (idPedido, idPro, qtde, valorUnit)
-- VALUES (1, 9999, 2, 350);

--INSERT INTO ItemPedido (idPedido, idPro, qtde, valorUnit)
-- VALUES (1, 1000, 3, 350);

SELECT * FROM Marca;

SELECT * FROM Produto;

SELECT * FROM Pedido;

SELECT * FROM ItemPedido;