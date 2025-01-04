-- where filtra registros
-- operadores comparacao (= < > <= >= <> !=)
-- operadores logicos and e or
select * from users
where 
id != 103 
and created_at < '2025-01-04 19:21:05';