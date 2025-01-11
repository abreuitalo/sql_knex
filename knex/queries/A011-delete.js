/*
-- Delete sempre comparando com o SELECT antes

delete from users where id between 110 and 115;

select * from users
where id between 110 and 115;
  */

const knex = require("../config/database");
const select = knex("users").select("id", "first_name");
const selectSql = knex("users").delete().whereBetween("id", [30, 35]); // apagando um intervalo

console.log(select.toString());
console.log(selectSql.toString());

select.then((data) => console.log(data));
