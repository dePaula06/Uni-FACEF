CREATE DATABASE ClinicaVeterinaria;

USE ClinicaVeterinaria;

CREATE TABLE Animal (
  codPac INT PRIMARY KEY IDENTITY(1, 1),
  nomeAnimal VARCHAR(100),
  especie VARCHAR(100)
 )
 
 CREATE TABLE Veterinario (
 	codMed INT PRIMARY KEY IDENTITY(1, 1),
   	nome VARCHAR(100),
   dataNasc DATE
 )
 
 CREATE TABLE Consulta (
 	codCons INT PRIMARY KEY IDENTITY(1, 1),
   	dataCons DATE,
   	valor MONEY,
   	codPac INT FOREIGN KEY REFERENCES Animal(codPac),
   	codMed INT FOREIGN KEY REFERENCES Veterinario(codMed)
 )

 -- Inserção de Veterinários --

 INSERT INTO Veterinario
 VALUES
    ('Henrique', '2000-01-25'),
    ('Lucas', '1970-08-17'),
    ('Pedro', '1989-05-18'),
    ('Maria', '1990-11-01'),
    ('Cecilia', '1975-07-20')
 

-- Inserção de Animais --

INSERT INTO Animal (nomeAnimal, especie)
VALUES
    ('Rex', 'Cachorro'),
    ('Mel', 'Cachorro'),
    ('Thor', 'Cachorro'),
    ('Luna', 'Cachorro'),
    ('Nina', 'Gato'),
    ('Mingau', 'Gato'),
    ('Tom', 'Gato'),
    ('Simba', 'Gato'),
    ('Bidu', 'Coelho'),
    ('Pipoca', 'Coelho');

    -- Inserção de Consultas --

INSERT INTO Consulta (dataCons, valor, codPac, codMed)
VALUES
    ('2026-01-10', 120.00, 1, 1),
    ('2026-01-15', 150.00, 2, 2),
    ('2026-01-20', 100.00, 3, 3),
    ('2026-01-25', 180.00, 4, 4),
    ('2026-02-02', 130.00, 5, 5),
    ('2026-02-08', 110.00, 6, 1),
    ('2026-02-15', 200.00, 7, 2),
    ('2026-02-20', 140.00, 8, 3),
    ('2026-03-01', 160.00, 9, 4),
    ('2026-03-05', 125.00, 10, 5),
    ('2026-03-10', 135.00, 1, 2),
    ('2026-03-15', 175.00, 2, 3),
    ('2026-03-20', 115.00, 3, 4),
    ('2026-04-01', 190.00, 4, 5),
    ('2026-04-05', 145.00, 5, 1),
    ('2026-04-10', 155.00, 6, 2),
    ('2026-04-15', 210.00, 7, 3),
    ('2026-04-20', 130.00, 8, 4),
    ('2026-05-01', 170.00, 9, 5),
    ('2026-05-05', 120.00, 10, 1);

    SELECT * FROM Veterinario;
    SELECT * FROM Animal;
    SELECT * FROM Consulta;

    -- Iniciando exercícios --

    SELECT MAX(valor) as maiorValorPago FROM Consulta;

    SELECT AVG(valor) as valorMedio, MAX(valor) as maiorValor, MIN(valor) as menorValor FROM Consulta;

    INSERT INTO Consulta(dataCons, valor, codPac, codMed)
    VALUES ('2026-08-15', 52.53, 3, 2)

    UPDATE Veterinario set nome = 'Pedro de Paula Oliveira'
    WHERE codMed = 3

    SELECT * FROM Veterinario;

    SELECT DISTINCT (especie) AS especiesAnimais FROM Animal;

    SELECT COUNT(*) FROM Consulta;

    SELECT COUNT(codMed) as numConsultas FROM Consulta;

    SELECT nomeAnimal FROM Animal
    ORDER BY nomeAnimal

    SELECT SUM(valor) as valorTotal FROM Consulta
    WHERE codMed = 3

    SELECT COUNT(DISTINCT(codMed)) as totalMedico FROM Consulta;

    SELECT (COUNT(codMed) * 1.10) AS numeroTotalConsultas FROM Consulta
    WHERE codMed = 3

    SELECT COUNT(*) AS numeroTotalConsultas
    FROM Consulta
    WHERE codMed = 3
    AND dataCons >= '2026-01-01'
    AND dataCons <= '2026-03-31';

    SELECT * FROM Consulta
    WHERE codMed = 3