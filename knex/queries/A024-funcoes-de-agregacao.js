/*
select 
max(salary) as max_salary, -- maximo
min(salary) as min_salary, -- minimo
avg(salary) as avg_salary, -- media
sum(salary) as sum_salary, -- soma
count(salary) as count_salary -- numero de registros
from users
where first_name='brittany';
*/

const knex = require("../../knex/config/database");
const select = knex("users")
  .max("salary as max_salary")
  .min("salary as min_salary")
  .avg("salary as avg_salary")
  .sum("salary as sum_salary")
  .count("salary as count_salary");

console.log(select.toString());

select
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.log(e.message);
  })
  .finally(() => {
    knex.destroy();
  });
