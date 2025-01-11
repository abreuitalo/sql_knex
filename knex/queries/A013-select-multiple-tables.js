/*
select u.id as uid, p.id as pid,
p.bio, u.first_name 
from users as u, profiles as p
where u.id = p.user_id;
 */

const knex = require("../config/database");
const select = knex(
  knex.raw("?? as ??,?? as ??", ["users", "u", "profiles", "p"])
)
  .select("u.id as uid", "p.id as pid", "p.bio", "u.first_name")
  .where("u.id", "=", knex.raw("??", ["p.user_id"]));

console.log(select.toString());

select.then((data) => {
  console.log(data);
});
