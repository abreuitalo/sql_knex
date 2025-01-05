select id, first_name, email as uemail
from users
where id between 100 and 150
order by first_name desc;