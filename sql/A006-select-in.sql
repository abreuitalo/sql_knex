-- in seleciona elementos entre os valores enviados
select * from users
where id in (110, 115, 120, 125, 130) 
and first_name in ('Jacob', 'Lynn');