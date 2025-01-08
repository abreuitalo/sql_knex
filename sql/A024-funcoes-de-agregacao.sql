select 
max(salary) as max_salary, -- maximo
min(salary) as min_salary, -- minimo
avg(salary) as avg_salary, -- media
sum(salary) as sum_salary, -- soma
count(salary) as count_salary -- numero de registros
from users
where first_name='brittany';