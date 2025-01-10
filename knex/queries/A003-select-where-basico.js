/*
select * from users
where 
id != 103 
and created_at < '2025-01-04 19:21:05';
*/

const knex = require("../config/database");

// knex com where
const select = knex("users")
  .select("id", "first_name")
  .where("id", "<>", 2)
  .andWhere("created_at", ">=", "2025-01-09 20:54:15"); // AND
//.orWhere("id", "=", 4); // OR

console.log(select.toString());

select
  .then((data) => console.log(data))
  .catch((e) => console.log(e.message))
  .finally(() => knex.destroy());
