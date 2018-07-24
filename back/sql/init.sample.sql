CREATE DATABASE IF NOT EXISTS wild_movies CHARACTER SET utf8 COLLATE utf8_general_ci;
CREATE USER 'yourUserName'@'localhost' IDENTIFIED BY 'yourPassword';
GRANT ALL PRIVILEGES ON wild_movies.* TO 'yourUserName'@'localhost';