/*
insert into roles (name)
values ('POST'),('PUT'),('DELETE'),('GET');
*/

const knex = require("../config/database");
const insert = knex("roles").insert([
  { name: "POST" },
  { name: "PUT" },
  { name: "DELETE" },
  { name: "GET" },
]);

insert.then((data) => {
  console.log(data);
});
