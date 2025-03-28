CREATE DATABASE login
CREATE DATABASE dates

CREATE TABLE login(
    username VARCHAR(10) NOT NULL UNIQUE,
    password VARCHAR(10) UNIQUE,
    id INT PRIMARY KEY AUTO_INCREMENT
)

CREATE TABLE dates(
    ID text,
    day int,
    month int,
    year int

)