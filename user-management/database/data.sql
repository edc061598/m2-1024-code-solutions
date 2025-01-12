-- DANGER: this is NOT how to do it in the real world.
-- You should NEVER EVER check user data into Git!

insert into "users" ("userId", "username", "hashedPassword")
values (1, 'autodidact', '$argon2i$v=19$m=4096,t=3,p=1$h7icQD/xZr8akZsX+hNA0A$h68atJWyjvunAwNOpSpMfg9sPvoMQ6dKwoh0dJhurWA'),
       (2, 'admin', '$argon2i$v=19$m=4096,t=3,p=1$h7icQD/xZr8akZsX+hNA0A$h68atJWyjvunAwNOpSpMfg9sPvoMQ6dKwoh0dJhurWA');

alter sequence "users_userId_seq" restart with 3;

-- Some starting Todos

insert into "todos" ("userId", "task", "isCompleted")
values (1, 'Learn to code', false),
       (1, 'Build projects', false),
       (1, 'Get a job', false),
       (2, 'Administer the site', false),
       (2, 'Fix all the bugs', false),
       (2, 'Manage the database', false),
       (2, 'Get a better job!', false);
