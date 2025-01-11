/*
-- RIGHT JOIN
select u.id as uid, p.id as pid,
p.bio, u.first_name 
from users as u
right join profiles as p
on u.id = p.user_id;
*/

const knex = require("../config/database");
const select = knex("users as u")
  .select("u.id as uid", "p.id as pid", "p.bio", "u.first_name")
  .rightJoin("profiles as p", "u.id", "p.user_id") // considerando apenas tabela profiles (nao precisa existiar user)
  .orderBy("u.id", "asc")
  .limit(5);

console.log(select.toString());

select.then((data) => {
  console.log(data);
});
