-- Delete sempre comparando com o SELECT antes

delete from users where id between 110 and 115;

select * from users
where id between 110 and 115;