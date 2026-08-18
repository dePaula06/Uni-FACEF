CREATE DATABASE HotelInacioLoyola;
GO

USE HotelInacioLoyola;
GO

CREATE TABLE Hospede(
	codHospede INT PRIMARY KEY IDENTITY(1, 1),
	nome VARCHAR(100),
	sexo VARCHAR(10),
	idade INT
)

CREATE TABLE Quarto(
	codQuarto INT PRIMARY KEY IDENTITY(1, 1),
	tipo VARCHAR(50),
	numero INT,
	andar INT
)

CREATE TABLE Reserva(
	codReserva INT PRIMARY KEY IDENTITY(1, 1),
	dtEntrada DATE,
	dtSaida DATE,
	codHospede INT 
	FOREIGN KEY REFERENCES Hospede(codHospede),
	codQuarto INT 
	FOREIGN KEY REFERENCES Quarto(codQuarto)
)

CREATE TABLE Refeicao(
	codConsumo INT PRIMARY KEY IDENTITY(1, 1),
	descRefeicao VARCHAR(300),
	valor money,
	codReserva INT 
	FOREIGN KEY REFERENCES Reserva(codReserva)
)

CREATE TABLE Pagamento(
	codPagto INT PRIMARY KEY IDENTITY(1, 1),
	valor money,
	dtPgto DATE,
	codReserva INT 
	FOREIGN KEY REFERENCES Reserva(codReserva)
)

-- PASSO 1 => FINALIZADO COM SUCESSO

INSERT INTO Quarto (tipo, numero, andar)
VALUES
('Suíte Amazônia', 101, 1),
('Suíte Pantanal', 102, 1),
('Suíte Cerrado', 201, 2),
('Suíte Caatinga', 202, 2),
('Suíte Mata Atlântica', 301, 3);

INSERT INTO Hospede (nome, sexo, idade)
VALUES
('Juma', 'Fêmea', 5),
('Tico', 'Macho', 3),
('Bento', 'Macho', 7),
('Luna', 'Fêmea', 4),
('Caju', 'Macho', 6),
('Nina', 'Fêmea', 2),
('Zeca', 'Macho', 5),
('Amora', 'Fêmea', 8);

INSERT INTO Reserva (dtEntrada, dtSaida, codHospede, codQuarto)
VALUES
('2026-08-20', '2026-08-25', 1, 1),
('2026-08-21', '2026-08-28', 2, 2),
('2026-08-22', '2026-08-27', 3, 3),
('2026-08-23', '2026-08-30', 4, 5);

INSERT INTO Refeicao (descRefeicao, valor, codReserva)
VALUES
('Café da manhã com frutas tropicais e alimentação especial', 35.00, 1),
('Jantar com alimentação proteica específica', 50.00, 1),
('Café da manhã com frutas e sementes', 30.00, 2),
('Almoço com frutas variadas e sementes selecionadas', 40.00, 2),
('Café da manhã com alimentação especial para a espécie', 35.00, 3),
('Jantar com vegetais e frutas selecionadas', 30.00, 4);

SELECT * FROM Hospede;
SELECT * FROM Quarto;
SELECT * FROM Reserva;
SELECT * FROM Refeicao;
SELECT * FROM Pagamento;

-- PASSO 2: Check

SELECT COUNT(tipo) AS ContagemTipoQuarto FROM Quarto
WHERE tipo = 'Superior Master'

INSERT INTO Quarto (tipo, numero, andar)
VALUES
('Suíte Amazônia', 107, 5),
('Suíte Amazônia', 809, 8)

SELECT COUNT(tipo) AS ContagemTipoQuarto FROM Quarto
WHERE tipo = 'Suíte Amazônia'

-- PASSO 3: Check

SELECT AVG(valor) AS valorMedioRefeicao FROM  Refeicao;

-- PASSO 4: Check

ALTER TABLE Hospede
DROP COLUMN Idade 

SELECT * FROM Hospede;

ALTER TABLE Hospede
ADD dataNasc DATE

SELECT * FROM Hospede;

-- PASSO 5: Check

INSERT INTO Reserva (dtEntrada, dtSaida, codHospede, codQuarto)
VALUES
('2026-01-20', '2026-05-25', 1, 3)

SELECT COUNT(DISTINCT(codHospede)) AS numHospedesReserva FROM Reserva;

-- PASSO 6: Check

SELECT h.nome, r.dtEntrada FROM Hospede AS h
INNER JOIN Reserva AS r ON h.codHospede = r.codHospede;

-- PASSO 7: Check

UPDATE Hospede set dataNasc = DATEADD(DAY, codHospede * 2, '2026-01-01');

SELECT * FROM Hospede;

-- PASSO 8: Check

INSERT INTO Reserva (dtEntrada, dtSaida, codHospede, codQuarto)
VALUES
('2023-02-10', '2023-02-15', 1, 1),
('2023-04-05', '2023-04-12', 2, 2),
('2023-06-18', '2023-06-23', 3, 3),
('2023-08-20', '2023-08-25', 4, 5),
('2023-11-10', '2023-11-15', 5, 4),
('2024-01-15', '2024-01-20', 6, 1),
('2024-03-22', '2024-03-28', 7, 2),
('2024-05-10', '2024-05-16', 8, 3),
('2024-08-05', '2024-08-10', 1, 5),
('2024-11-18', '2024-11-25', 3, 4);

SELECT h.nome, r.dtEntrada FROM Hospede AS h
INNER JOIN Reserva AS r ON h.codHospede = r.codHospede
WHERE dtEntrada < '01-04-2026'
ORDER BY h.nome

-- PASSO 9: Check

SELECT h.nome
FROM Hospede AS h
INNER JOIN Reserva AS r 
    ON h.codHospede = r.codHospede
INNER JOIN Quarto AS q 
    ON r.codQuarto = q.codQuarto
WHERE h.sexo = 'Fêmea' 
  AND q.andar = 3;

  -- PASSO 10: Check

SELECT q.numero, q.tipo FROM Quarto AS q
LEFT JOIN Reserva AS r ON q.codQuarto = r.codQuarto
WHERE r.codQuarto IS NULL

-- PASSO 11: Check

INSERT INTO Pagamento (valor, dtPgto, codReserva)
VALUES
(350.00, '2026-08-20', 1),
(490.00, '2026-08-21', 2),
(420.00, '2026-08-22', 3),
(630.00, '2026-08-23', 4),
(400.00, '2026-01-20', 5),
(350.00, '2023-02-10', 6),
(490.00, '2023-04-05', 7),
(350.00, '2023-06-18', 8),
(420.00, '2023-08-20', 9),
(350.00, '2023-11-10', 10),
(490.00, '2024-01-15', 11),
(420.00, '2024-03-22', 12),
(560.00, '2024-05-10', 13),
(350.00, '2024-08-05', 14),
(490.00, '2024-11-18', 15);

SELECT SUM(p.valor) AS somaValorPago FROM Pagamento AS p
INNER JOIN Reserva AS r ON p.codReserva = r.codReserva
INNER JOIN Hospede AS h ON r.codHospede = h.codHospede
WHERE h.nome = 'Luna'

SELECT * FROM Pagamento
WHERE codReserva IN(4, 9)

-- PASSO 12: Check

SELECT COUNT(DISTINCT r.codHospede) AS qtdHospedes
FROM Reserva AS r
WHERE r.dtEntrada <= '2026-02-28'
  AND r.dtSaida >= '2026-02-01'
  AND DATEDIFF(DAY, r.dtEntrada, r.dtSaida) > 5;

-- PASSO 13: Checzito =)
