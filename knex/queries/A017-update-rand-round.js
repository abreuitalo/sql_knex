/*
-- Configura um salario alteatório para users
update users set salary = round(rand() * 10000, 2);

select salary from users 
where salary between 1000 and 1500
order by salary asc;
*/

const knex = require("../config/database");
const update = knex("users").update({
  salary: knex.raw("round(rand() * ??, 2)", [10000]),
});

console.log(update.toString());

update.then((data) => {
  console.log(data);
});
