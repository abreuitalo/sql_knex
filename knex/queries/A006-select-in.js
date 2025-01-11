/*
-- in seleciona elementos entre os valores enviados
select * from users
where id in (110, 115, 120, 125, 130) 
and first_name in ('Jacob', 'Lynn');
*/

const knex = require("../config/database");
const selectIn = knex("users")
  .select("id", "first_name")
  .whereIn("id", [10, 15, 20, 25, 30]);

console.log(selectIn.toString());

selectIn
  .then((data) => {
    console.log(data);
  })
  .finally(() => knex.destroy());
