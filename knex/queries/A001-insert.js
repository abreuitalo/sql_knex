/*
insert into users 
(first_name, last_name, email, password_hash) values
("Helena", "A.", "helena@email.com", "3_hash"),
("Joana", "B.", "joana@email.com", "4_hash"),
("Rosana", "C.", "rosana@email.com", "5_hash");
*/

const knex = require("../config/database");

const data = [
  {
    first_name: "Joana",
    last_name: "B.",
    email: "joana@email.com",
    password_hash: "4_hash",
    salary: 2331.12,
  },
  {
    first_name: "Rosana",
    last_name: "C.",
    email: "rosana@email.com",
    password_hash: "5_hash",
    salary: 8431.12,
  },
];

const insert = knex("users").insert(data); // insert into users (data/dados)
insert
  .then((data) => console.log(data))
  .catch((e) => console.log(e.message))
  .finally(() => knex.destroy());

// console.log(insert.toString()); // debugar e ver a consulta
// console.log(insert.toSQL().toNative()); // insert separando os valores
