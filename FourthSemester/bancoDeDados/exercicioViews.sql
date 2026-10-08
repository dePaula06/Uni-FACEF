CREATE DATABASE RevisaoBD;
GO

USE RevisaoBD;

CREATE TABLE Fabricante(
	codFabricante INT CONSTRAINT pkFabricante PRIMARY KEY IDENTITY(1, 1),
	razaoSocial VARCHAR(40) NOT NULL,
	cidade VARCHAR(80) CONSTRAINT defaultCidade DEFAULT('FRANCA'),
	UF VARCHAR(2) CONSTRAINT checkUF CHECK(UF in('SP', 'MG', 'RJ'))
)

INSERT INTO Fabricante
VALUES
('P&G', 'SAO PAULO', 'SP'),
('UNILEVER', 'CAMPINAS', 'SP'),
('JUSSARA', 'FRANCO DA ROCHA', 'SP'),
('NESTLE', 'BELO HORIZONTE', 'MG'),
('PARMALAT', 'RIO DE JANEIRO', 'RJ')

CREATE TABLE Categoria(
codCat INT CONSTRAINT pkCategoria PRIMARY KEY IDENTITY(100, 1)
	   CONSTRAINT checkCodCategoria CHECK(codCat <= 999),
descricao VARCHAR(40),
situacao VARCHAR(30) CONSTRAINT checkSituacao CHECK(situacao in('ATIVO', 'INATIVO'))
)

INSERT INTO Categoria
VALUES
('HIGIENE', 'ATIVO'),
('ALIMENTOS', 'ATIVO'),
('LIMPEZA', 'INATIVO'),
('BEBIDA', 'INATIVO'),
('LATICINIOS', 'INATIVO')

CREATE TABLE Produto(
	codPro INT CONSTRAINT pkProduto	PRIMARY KEY IDENTITY(1, 1),
	preco MONEY CONSTRAINT checkPreco CHECK(preco > 0),
	descricao VARCHAR(50) NOT NULL,
	codFabricante INT CONSTRAINT fkFabricante FOREIGN KEY REFERENCES Fabricante(codFabricante),
	codCategoria INT CONSTRAINT fkCategoria FOREIGN KEY REFERENCES Categoria(codCat)
)

INSERT INTO Produto
VALUES
(15, 'VEJA', 4, 104),
(4.90, 'KAYSER', 3, 101),
(11, 'DESODORANTE', 1, 100),
(8.30, 'BANANA', 2, 102),
(1.99, 'FARINHA DE TRIGO', 1, 102),
(1.50, 'SABAO EM PO', 3, 104),
(2.25, 'LAVA LOUÇAS', 5, 100)

ALTER TABLE Produto
ADD estoque INT CONSTRAINT checkEstoque CHECK(estoque >= 0)


CREATE VIEW vProFabCat
AS
SELECT 
    P.codPro,
    P.descricao AS nomePro,
    P.preco,
    C.descricao AS nomeCat,
    F.razaoSocial AS nomeFabricante
FROM Produto AS P
INNER JOIN Fabricante AS F 
    ON P.codFabricante = F.codFabricante
INNER JOIN Categoria AS C 
    ON P.codCategoria = C.codCat;

select * from vProFabCat

CREATE VIEW ProdutosRJ
as
	select P.descricao, F.UF
	from Produto AS P INNER JOIN FABRICANTE AS F ON P.codFabricante = F.codFabricante
	WHERE F.UF = 'RJ'

SELECT * FROM ProdutosRJ

CREATE VIEW catSPInativas
AS
	SELECT DISTINCT c.descricao
	FROM produto P INNER JOIN Fabricante F ON P.codFabricante = F.codFabricante
				   INNER JOIN Categoria C ON P.codCategoria = C.codCat
	where UF = 'SP' AND situacao = 'inativo'

SELECT * FROM catSPInativas

-- ==========================================
-- ITEM D
-- ==========================================

UPDATE Produto
SET estoque = 10
WHERE codPro = 1;

UPDATE Produto
SET estoque = 20
WHERE codPro = 2;

UPDATE Produto
SET estoque = 15
WHERE codPro = 3;

UPDATE Produto
SET estoque = 30
WHERE codPro = 4;

UPDATE Produto
SET estoque = 25
WHERE codPro = 5;

UPDATE Produto
SET estoque = 12
WHERE codPro = 6;

UPDATE Produto
SET estoque = 18
WHERE codPro = 7;


SELECT
    P.descricao AS nomeProduto,
    P.preco * P.estoque AS precoTotalEstoque,
    C.descricao AS categoria
FROM Produto AS P
INNER JOIN Fabricante AS F
    ON P.codFabricante = F.codFabricante
INNER JOIN Categoria AS C
    ON P.codCategoria = C.codCat
WHERE F.UF = 'SP';


-- ==========================================
-- EXERCÍCIO 3
-- ==========================================

CREATE TABLE Marca(
    codMarca INT
        CONSTRAINT pkMarca PRIMARY KEY
        IDENTITY(5000, 1),

    nomeMarca VARCHAR(40)
        CONSTRAINT uqNomeMarca UNIQUE
        NOT NULL
);


-- ==========================================
-- EXERCÍCIO 4
-- ==========================================

ALTER TABLE Produto
ADD codMarca INT
    CONSTRAINT fkMarca
    FOREIGN KEY REFERENCES Marca(codMarca);


-- ==========================================
-- EXERCÍCIO 5
-- ==========================================

INSERT INTO Marca (nomeMarca)
VALUES
('OMO'),
('NIVEA'),
('NESCAU'),
('DOVE'),
('TODDY');


-- Relacionando os produtos às marcas

UPDATE Produto
SET codMarca = 5000
WHERE codPro = 1;

UPDATE Produto
SET codMarca = 5001
WHERE codPro = 2;

UPDATE Produto
SET codMarca = 5002
WHERE codPro = 3;

UPDATE Produto
SET codMarca = 5003
WHERE codPro = 4;

UPDATE Produto
SET codMarca = 5004
WHERE codPro = 5;

UPDATE Produto
SET codMarca = 5000
WHERE codPro = 6;

UPDATE Produto
SET codMarca = 5001
WHERE codPro = 7;


SELECT * FROM Marca;


-- ==========================================
-- EXERCÍCIO 6
-- ==========================================

CREATE VIEW vFabricantesMarcasInativas
AS
SELECT
    F.razaoSocial AS fabricante,
    M.nomeMarca AS marca
FROM Produto AS P
INNER JOIN Fabricante AS F
    ON P.codFabricante = F.codFabricante
INNER JOIN Categoria AS C
    ON P.codCategoria = C.codCat
INNER JOIN Marca AS M
    ON P.codMarca = M.codMarca
WHERE C.situacao = 'INATIVO';


SELECT * FROM vFabricantesMarcasInativas;


-- ==========================================
-- EXERCÍCIO 7
-- ==========================================

CREATE VIEW vProdutosMarcas
AS
SELECT
    P.descricao AS produto,
    P.preco,
    M.nomeMarca AS marca
FROM Produto AS P
INNER JOIN Marca AS M
    ON P.codMarca = M.codMarca;


SELECT *
FROM vProdutosMarcas
ORDER BY produto;