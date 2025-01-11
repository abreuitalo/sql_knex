/*
select first_name, count(id) as total from users u 
group by first_name 
order by total desc;

select u.first_name, count(u.id) as total from users u
join profiles as p
on p.user_id = u.id
group by first_name
order by total desc
limit 6;
*/

const knex = require("../../knex/config/database");
const select = knex("users as u")
  .select("u.first_name")
  .leftJoin("profiles as p", "u.id", "p.user_id")
  .count("u.id as total")
  .whereIn("u.id", [69, 112, 10, 11])
  .groupBy("first_name")
  .orderBy("total", "desc");

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
