/*
-- like (parecido)
-- % qualquer coisa
-- _ um caractere
select * from users
where first_name like '%ma%_' ;
*/

const knex = require("../config/database");
const select = knex("users")
  .select("id", "first_name")
  .where("first_name", "like", "%a") // termina com a
  .orWhere("first_name", "like", "___"); // nomes com 3 caracteres

console.log(select.toString());

select
  .then((data) => {
    console.log(data);
  })
  .finally(() => knex.destroy());
