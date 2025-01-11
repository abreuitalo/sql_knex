/*
-- LEFT JOIN
select u.id as uid, p.id as pid,
p.bio, u.first_name 
from users as u
left join profiles as p
on u.id = p.user_id;
 */

const knex = require("../config/database");
const select = knex("users as u")
  .select("u.id as uid", "p.id as pid", "p.bio", "u.first_name")
  .leftJoin("profiles as p", "u.id", "p.user_id") // considerando apenas tabela users (nao precisa existir perfil)
  .where("u.first_name", "like", "%a")
  .orderBy("u.first_name", "desc")
  .limit(5);

console.log(select.toString());

select.then((data) => {
  console.log(data);
});
