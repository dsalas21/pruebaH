CREATE DATABASE IF NOT EXISTS HerbarioBD;
USE HerbarioBD;


CREATE TABLE IF NOT EXISTS Plantas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    scientific_name VARCHAR(255) NOT NULL,
    common_name VARCHAR(255) NOT NULL,
    family VARCHAR(255) NOT NULL,
    genus VARCHAR(255) NOT NULL,
    species VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    habitat TEXT NOT NULL,
    location VARCHAR(255) NOT NULL,
    image TEXT,
	collection_date DATE,
    recolector_id INT,
    CONSTRAINT fk_recolector
    FOREIGN KEY (recolector_id) REFERENCES Recolectores(id)
);


CREATE TABLE IF NOT EXISTS Usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);


CREATE TABLE IF NOT EXISTS Recolectores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    state VARCHAR(255) NOT NULL,
    country VARCHAR(255) NOT NULL,
    city VARCHAR(255) NOT NULL
);
