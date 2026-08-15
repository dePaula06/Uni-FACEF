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