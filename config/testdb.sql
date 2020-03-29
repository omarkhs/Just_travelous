CREATE DATABASE countries;

USE countries;

CREATE TABLE cities (
	id   INTEGER PRIMARY KEY AUTO_INCREMENT,
	city_name	VARCHAR(255) NOT NULL,
	post_code	VARCHAR(255) NOT NULL
) CHARACTER SET utf8;

SHOW TABLES;

INSERT INTO cities (city_name, post_code) VALUES("Vancouver","V6V2S4");
INSERT INTO cities (city_name, post_code) VALUES("Richmond","V6V2W4");
INSERT INTO cities (city_name, post_code) VALUES("Burnaby","V6V2X4");

SELECT * FROM cities;