insert into users_roles (user_id, role_id)
values (102, 3);

select user_id, role_id from users_roles
where user_id=102

select 
id, 
(select id from roles order by rand() limit 1) as teste 
from users;

insert into users_roles (user_id, role_id)
select 
id, 
(select id from roles order by rand() limit 1) as teste 
from users;
