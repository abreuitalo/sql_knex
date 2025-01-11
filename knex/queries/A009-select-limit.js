/*
-- limit limita a qtd de valores
-- opffset desloca o cursor para exibir os resultados
select id, first_name, email
from users
where id between 100 and 150
order by id asc
limit 9,3;
*/

const knex = require("../config/database");
const select = knex("users")
  .select("id", "first_name")
  .orderBy("id", "asc") // order by
  .limit(5)
  .offset(0); // 'estilo paginagao, passa para a proxima'

console.log(select.toString());

select
  .then((data) => {
    console.log(data);
  })
  .finally(() => knex.destroy());
