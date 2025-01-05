-- limit limita a qtd de valores
-- opffset desloca o cursor para exibir os resultados
select id, first_name, email
from users
where id between 100 and 150
order by id asc
limit 9,3;