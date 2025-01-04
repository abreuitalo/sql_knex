-- Seleciona a base de dados
use base_de_dados;

-- Mostra as tabelas da base de dados
show tables;

-- Descreve as colunas da tabela
describe users;

-- Inserir registros na base de dados
insert into users 
(first_name, last_name, email, password_hash) values
("Helena", "A.", "helena@email.com", "3_hash"),
("Joana", "B.", "joana@email.com", "4_hash"),
("Rosana", "C.", "rosana@email.com", "5_hash");
