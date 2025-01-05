select u.id as uid, p.id as pid,
p.bio, u.first_name 
from users as u, profiles as p
where u.id = p.user_id;

-- outra forma de buscar, por INNER JOIN
select u.id as uid, p.id as pid,
p.bio, u.first_name 
from users as u
inner join profiles as p
on u.id = p.user_id
where u.first_name like '%a'
order by u.first_name desc
limit 5;
