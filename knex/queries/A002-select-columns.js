/*
-- Seleciona colunas
select email, id, first_name from users;
select u.email uemail, u.id uid, u.first_name from users as u;
*/

const knex = require("../config/database");

// const select = knex("users"); // select * from users

// select email, id, first_name from users; 
const select = knex("users as u").select(
  "u.email as uemail",
  "u.id as uid",
  "u.first_name"
);

// console.log(select.toString());

select
  .then((data) => console.log(data))
  .catch((e) => console.log(e.message))
  .finally(() => knex.destroy());
