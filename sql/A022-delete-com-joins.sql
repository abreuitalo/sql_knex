-- selecionando usuario e sua bio em profiles
select u.first_name, p.bio from users u
left join profiles as p
on p.user_id = u.id
where u.first_name = 'Tanner';

-- Apaga registros com join
delete p, u from users u
left join profiles as p
on p.user_id = u.id
where u.first_name = 'Tanner';