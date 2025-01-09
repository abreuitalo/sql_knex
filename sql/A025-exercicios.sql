-- 1) Insira 5 usuários na tabela users
insert into users (first_name, last_name, email, password_hash, salary)
values 
('user 1', 'user 1', 'user1@email.comd', 'user1', 1000),
('user 2', 'user 2', 'user2@email.comd', 'user2', 2000),
('user 3', 'user 3', 'user3@email.comd', 'user3', 3000),
('user 4', 'user 4', 'user4@email.comd', 'user4', 4000),
('user 5', 'user 5', 'user5@email.comd', 'user5', 5000);

-- 2) Insira 5 perfis para os usuários inseridos
insert into profiles
(bio, description, user_id)
select 
concat(u.first_name, ' bio'),
concat(u.first_name, ' description'),
u.id
from users as u;

-- 3) Insira permissões (roles) para os usuários inseridos
insert into users_roles (user_id, role_id)
select 
u.id, (rand() * 4) -- gera numero aleatorio ate 5
from users as u;

-- 4) Selecione os últimos 5 usuarios por ordem decrescente
select * from users u 
order by first_name desc;

-- 5) Atualize o último usuario inserido
update users set
first_name = 'user 5 update'
where id=226;

-- 6) Remova uma permissão de algum usuario
delete from users_roles
where user_id=225 and role_id=3;

-- 7) Remova um usuário que tem a permissão "PUT"
delete u
from users u
inner join users_roles ur on u.id=ur.user_id
inner join roles r on ur.role_id = r.id
where r.name = "PUT";

-- 8) Selecione usuários com perfis e permissoes (obrigatorio)
select u.id, u.first_name, r.name, p.bio
from users u
inner join users_roles ur on u.id = ur.user_id 
inner join roles r on ur.role_id = r.id 
inner join profiles p on p.user_id = u.id;

-- 9) Selecione usuários com perfis e permissoes (opcional)
select u.id, u.first_name, r.name, p.bio
from users u
left join users_roles ur on u.id = ur.user_id 
left join roles r on ur.role_id = r.id 
left join profiles p on p.user_id = u.id;

-- 10) Selecione usuários com perfis e permissoes ordenando por salario
select *
from users u 
inner join users_roles ur on u.id = ur.user_id 
inner join roles r on ur.role_id = r.id 
inner join profiles p on p.user_id = u.id
order by salary desc;




