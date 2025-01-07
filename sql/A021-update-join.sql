-- selecionando usuario e sua bio em profiles
select u.first_name, p.bio from users u
join profiles as p
on p.user_id = u.id
where u.first_name = 'Tanner';

-- Atualizando bio de profiles a partir de um join com users
update users as u
join profiles as p
on p.user_id = u.id
set p.bio = concat(p.bio, ' atualizado')
where u.first_name = 'Tanner';