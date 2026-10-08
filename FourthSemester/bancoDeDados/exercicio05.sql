create database exerc04
go
use exerc04

create table Func (
         CodFunc int constraint pk_func primary key, 
         PrimeiroNome varchar(50), 
         SegundoNome varchar(50), 
         UltimoNome varchar(50), 
         DataNasci datetime, 
         CPF   varchar(20), 
         RG varchar(20), 
         Endereco varchar(50), 
         CEP varchar(15), 
         Cidade varchar(50), 
         Fone varchar(20), 
         CodDepto int, 
         Funcao varchar(50), 
         Salario money
)

create table Depto (
          CodDepto int constraint pk_deto primary key, 
          Nome varchar(50), 
          Localizacao varchar(50), 
          CodigoFuncionarioGerente int
)

alter table Func
add constraint fk_depto_func foreign key (CodDepto) references Depto(CodDepto)

alter table Depto
add constraint fk_func_gerente foreign key (CodigoFuncionarioGerente) 
      references Func(CodFunc)


INSERT INTO DEPTO 
values
      (1,         'RH',            'SUL',      NULL),
      (2,         'COMPRAS',         'SUL',      NULL),
      (3,         'VENDAS',         NULL,      NULL),
      (4,         'FINANCEIRO',      'NORTE',   NULL),
      (5,         'MARKETING',      'NORTE',   NULL),
      (6,         'DESENVOLVIMENTO',   NULL,      NULL),
      (7,         'CONTABILIDADE',   NULL,      NULL)


INSERT INTO Func (CodFunc, PrimeiroNome, SegundoNome, 
               UltimoNome, DataNasci, Cidade, 
               Funcao, Salario)
values (1, 'JOSE', 'MANOEL', 'DA SILVA', 
            '1980/01/01','FRANCA',
            'CONTADOR', 1200.00)

update func set salario = 1700
where codFunc = 5

INSERT INTO Func 
    (CodFunc, PrimeiroNome, SegundoNome, UltimoNome, DataNasci, 
     CPF, RG, Endereco, CEP, Cidade, Fone, CodDepto, Funcao, Salario)
VALUES
    (2, 'MARIA', 'APARECIDA', 'SOUZA', '19850315',
     '123.456.789-01', '12.345.678-1', 'Rua das Flores, 100', '14400-000',
     'FRANCA', '(16) 99999-0001', 1, 'ANALISTA DE RH', 2500.00),

    (3, 'JOAO', 'CARLOS', 'OLIVEIRA', '19900722',
     '234.567.890-12', '23.456.789-2', 'Rua Central, 200', '14401-000',
     'FRANCA', '(16) 99999-0002', 2, 'COMPRADOR', 2800.00),

    (4, 'ANA', 'PAULA', 'SANTOS', '19881110',
     '345.678.901-23', '34.567.890-3', 'Av. Brasil, 300', '14402-000',
     'FRANCA', '(16) 99999-0003', 3, 'VENDEDORA', 2200.00),

    (5, 'CARLOS', 'EDUARDO', 'PEREIRA', '19820518',
     '456.789.012-34', '45.678.901-4', 'Rua São Paulo, 400', '14403-000',
     'FRANCA', '(16) 99999-0004', 4, 'ANALISTA FINANCEIRO', 3200.00),

    (6, 'JULIANA', 'FERREIRA', 'COSTA', '19930925',
     '567.890.123-45', '56.789.012-5', 'Rua Minas Gerais, 500', '14404-000',
     'FRANCA', '(16) 99999-0005', 5, 'ANALISTA DE MARKETING', 2700.00),

    (7, 'RICARDO', 'AUGUSTO', 'ALMEIDA', '19870212',
     '678.901.234-56', '67.890.123-6', 'Av. Presidente Vargas, 600', '14405-000',
     'FRANCA', '(16) 99999-0006', 6, 'DESENVOLVEDOR', 4500.00),

    (8, 'FERNANDA', 'CRISTINA', 'ROCHA', '19910630',
     '789.012.345-67', '78.901.234-7', 'Rua Bahia, 700', '14406-000',
     'FRANCA', '(16) 99999-0007', 7, 'CONTADORA', 3500.00),

    (9, 'LUCAS', 'HENRIQUE', 'MARTINS', '19951205',
     '890.123.456-78', '89.012.345-8', 'Rua Goiás, 800', '14407-000',
     'FRANCA', '(16) 99999-0008', 6, 'PROGRAMADOR', 3800.00),

    (10, 'PATRICIA', 'REGINA', 'LIMA', '19860420',
     '901.234.567-89', '90.123.456-9', 'Av. Major Nicácio, 900', '14408-000',
     'FRANCA', '(16) 99999-0009', 3, 'SUPERVISORA DE VENDAS', 4000.00),

    (11, 'GABRIEL', 'ANTONIO', 'BARBOSA', '19920814',
     '012.345.678-90', '01.234.567-0', 'Rua Amazonas, 1000', '14409-000',
     'FRANCA', '(16) 99999-0010', 2, 'ASSISTENTE DE COMPRAS', 2300.00);

     INSERT INTO Func 
    (CodFunc, PrimeiroNome, SegundoNome, UltimoNome, DataNasci,
     CPF, RG, Endereco, CEP, Cidade, Fone, CodDepto, Funcao, Salario)
VALUES
    (12, 'MARCELO', 'ANTONIO', 'MENDES', '19890412',
     '112.233.445-01', '11.222.333-1', 'Rua Paraná, 120', '14410-000',
     'FRANCA', '(16) 99999-0011', 6, 'ANALISTA DE SISTEMAS', 4200.00),

    (13, 'CAMILA', 'FERNANDA', 'NOGUEIRA', '19950728',
     '223.344.556-02', '22.333.444-2', 'Rua XV de Novembro, 250', '14010-000',
     'RIBEIRAO PRETO', '(16) 99999-0012', 5, 'ASSISTENTE DE MARKETING', 2600.00),

    (14, 'RAFAEL', 'ALEXANDRE', 'GOMES', '19831106',
     '334.455.667-03', '33.444.555-3', 'Av. Paulista, 800', '01310-000',
     'SAO PAULO', '(11) 99999-0013', 4, 'GERENTE FINANCEIRO', 5500.00),

    (15, 'BEATRIZ', 'HELENA', 'RIBEIRO', '19960819',
     '445.566.778-04', '44.555.666-4', 'Rua Santos Dumont, 350', '14300-000',
     'BATATAIS', '(16) 99999-0014', 1, 'ASSISTENTE DE RH', 2400.00),

    (16, 'DANIEL', 'HENRIQUE', 'MOREIRA', '19911023'
     '556.677.889-05', '55.666.777-5', 'Rua Goiás, 420', '15000-000',
     'SAO JOSE DO RIO PRETO', '(17) 99999-0015', 3, 'VENDEDOR', 2900.00);

     INSERT INTO Func 
    (CodFunc, PrimeiroNome, SegundoNome, UltimoNome, DataNasci,
     CPF, RG, Endereco, CEP, Cidade, Fone, CodDepto, Funcao, Salario)
VALUES
    (17, 'ROBERTO', 'CARLOS', 'SILVA', '19870615',
     '123.456.789-10', '12.345.678-2', 'Rua Bahia, 110', '14410-100',
     'FRANCA', '(16) 99999-0017', 3, 'SUPERVISOR DE VENDAS', 4200.00),

    (18, 'RENATA', 'MARIA', 'OLIVEIRA', '19890322',
     '234.567.890-23', '23.456.789-3', 'Rua Minas Gerais, 220', '14410-200',
     'FRANCA', '(16) 99999-0018', 2, 'SUPERVISORA DE COMPRAS', 4300.00),

    (19, 'ANDRE', 'LUIZ', 'SANTOS', '19851010',
     '345.678.901-34', '34.567.890-4', 'Av. Brasil, 330', '14410-300',
     'FRANCA', '(16) 99999-0019', 8, 'SUPERVISOR DE LOGISTICA', 4400.00),

    (20, 'CAROLINA', 'FERNANDA', 'PEREIRA', '19900218',
     '456.789.012-45', '45.678.901-5', 'Rua São Paulo, 440', '14410-400',
     'FRANCA', '(16) 99999-0020', 5, 'SUPERVISORA DE MARKETING', 4100.00),

    (21, 'THIAGO', 'ALEXANDRE', 'COSTA', '19930712',
     '567.890.123-56', '56.789.012-6', 'Rua Paraná, 550', '14410-500',
     'FRANCA', '(16) 99999-0021', 6, 'ANALISTA DE SISTEMAS', 3900.00),

    (22, 'AMANDA', 'CRISTINA', 'MARTINS', '19941125',
     '678.901.234-67', '67.890.123-7', 'Av. Presidente Vargas, 660', '14410-600',
     'RIBEIRAO PRETO', '(16) 99999-0022', 4, 'ANALISTA FINANCEIRO', 3600.00),

    (23, 'FELIPE', 'HENRIQUE', 'ROCHA', '19920508',
     '789.012.345-78', '78.901.234-8', 'Rua Goiás, 770', '14410-700',
     'BATATAIS', '(16) 99999-0023', 9, 'ANALISTA JURIDICO', 3800.00);

     INSERT INTO DEPTO 
VALUES
    (8, 'LOGISTICA', 'SUL', NULL),
    (9, 'JURIDICO', 'NORTE', NULL),
    (10, 'ADMINISTRACAO', 'CENTRO', NULL);

    INSERT INTO DEPTO (codDepto, Nome, Localizacao, CodigoFuncionarioGerente)
VALUES
    (12, 'FINANCEIRO', 'SUL', 3)

-- ==============================================================
-- EXERCÍCIO 01
-- ==============================================================

SELECT * 
FROM Func
ORDER BY cidade ASC

-- ==============================================================
-- EXERCÍCIO 02
-- ==============================================================

SELECT PrimeiroNome 
FROM Func
WHERE DataNasci >= '1950-01-01' AND DataNasci<= '1970-01-01'

-- ==============================================================
-- EXERCÍCIO 03
-- ==============================================================

SELECT * FROM Func
WHERE Salario > 1000
ORDER BY PrimeiroNome, SegundoNome, UltimoNome

-- ==============================================================
-- EXERCÍCIO 04
-- ==============================================================

SELECT DataNasci, PrimeiroNome
FROM Func
ORDER BY DataNasci DESC


-- ==============================================================
-- EXERCÍCIO 05
-- ==============================================================

SELECT SUM(Salario) AS totalFolhaPagamento
FROM Func

-- ==============================================================
-- EXERCÍCIO 06
-- ==============================================================

SELECT f.PrimeiroNome, d.nome, f.funcao
FROM Func f
INNER JOIN Depto d
ON f.CodDepto = d.CodDepto

-- ==============================================================
-- EXERCÍCIO 07
-- ==============================================================

SELECT d.nome as nomeDept, f.PrimeiroNome as nomeGerente
    FROM Depto as d
    INNER JOIN Func as f
    ON d.CodigoFuncionarioGerente = f.CodFunc

-- ===============================================================
-- EXERCÍCIO 08
-- ===============================================================

SELECT SUM(f.Salario) as FolhaPgto, d.nome as NomeDepto
    FROM Func f
    INNER JOIN Depto d
    ON f.CodDepto = d.CodDepto
    GROUP BY(d.Nome)

-- ==============================================================
-- EXERCÍCIO 09
-- ==============================================================

SELECT d.nome, f.PrimeiroNome, f.Funcao FROM Depto d
INNER JOIN Func f
ON f.CodDepto = d.CodDepto
WHERE f.funcao LIKE 'SUPERVISOR%'

SELECT nome FROM Depto
    WHERE codDepto IN(
        SELECT CodDepto FROM Func
        WHERE Funcao LIKE 'SUPERVISOR%'
    )


-- ==============================================================
-- EXERCÍCIO 10
-- ==============================================================

SELECT COUNT (codFunc) as qtdFuncionarios FROM Func

-- ==============================================================
-- EXERCÍCIO 11
-- ==============================================================

SELECT AVG(salario) AS salarioMedio FROM Func

-- ==============================================================
-- EXERCÍCIO 12
-- ==============================================================

SELECT COUNT(f.CodFunc) AS qtdeFunc, d.nome FROM Func f
    INNER JOIN Depto d
    ON f.CodDepto = d.CodDepto
    GROUP BY d.nome

-- ==============================================================
-- EXERCÍCIO 13
-- ==============================================================

SELECT MIN(f.Salario) as menorsalario, d.nome FROM Func f
    INNER JOIN Depto d
    ON f.CodDepto = d.CodDepto
    GROUP BY d.nome

-- ==============================================================
-- EXERCÍCIO 14
-- ==============================================================

INSERT INTO Func 
    (CodFunc, PrimeiroNome, SegundoNome, UltimoNome, DataNasci,
     CPF, RG, Endereco, CEP, Cidade, Fone, CodDepto, Funcao, Salario)
VALUES
    (24, 'MARCELO', NULL, 'SOUZA', '19880512',
     '890.123.456-89', '89.012.345-9', 'Rua Paraná, 100', '14411-000',
     'FRANCA', '(16) 99999-0024', 1, 'ASSISTENTE ADMINISTRATIVO', 2400.00),

    (25, 'JULIANA', NULL, 'MENDES', '19920318',
     '901.234.567-90', '90.123.456-0', 'Rua Goiás, 200', '14411-100',
     'FRANCA', '(16) 99999-0025', 8, 'ANALISTA DE LOGISTICA', 3200.00),

    (26, 'RICARDO', NULL, 'FERREIRA', '19870725',
     '012.345.678-91', '01.234.567-1', 'Av. Brasil, 300', '14411-200',
     'FRANCA', '(16) 99999-0026', 6, 'DESENVOLVEDOR', 4000.00),

    (27, 'PATRICIA', NULL, 'ALMEIDA', '19910930',
     '123.456.789-92', '12.345.678-2', 'Rua São Paulo, 400', '14411-300',
     'RIBEIRAO PRETO', '(16) 99999-0027', 5, 'ANALISTA DE MARKETING', 3300.00),

    (28, 'GUSTAVO', NULL, 'ROCHA', '19950614',
     '234.567.890-93', '23.456.789-3', 'Rua Minas Gerais, 500', '14411-400',
     'BATATAIS', '(16) 99999-0028', 9, 'ANALISTA JURIDICO', 3500.00);

SELECT PrimeiroNome, UltimoNome FROM Func
WHERE SegundoNome IS NULL