/*
-- Update - Atualiza registros
update users set 
first_name='Minerva Teste',
last_name='Miranda'
where id = 29;

select * from users
where id between 119 and 121;
*/
const knex = require("../config/database");
const select = knex("users").where("id", "=", 29);
const update = knex("users").where("id", 29).update({
  first_name: "Teste",
  last_name: "Abreu",
});

console.log(update.toString());

update.then((data) => {
  console.log(data);
  select.then((data) => console.log(data)).finally(knex.destroy());
});
