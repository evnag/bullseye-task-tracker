-- liquibase formatted sql

-- changeSet evnag:1
create table users
(
    id  bigserial not null primary key,
    first_name TEXT,
    last_name  TEXT,
    login  TEXT,
    password   TEXT
);

-- changeSet evnag:2
alter table users
    add column avatar text;

-- changeSet evnag:3
create table authorities
(
    id bigserial primary key,
    user_id bigint not null,
    authority varchar(30)
);

alter table authorities
    add constraint authorities_user_id FOREIGN KEY (user_id) REFERENCES users (id),
    add constraint authorities_uk unique (user_id, authority);

-- changeSet evnag:4
alter table users
    rename column login to username;

-- changeSet evnag:5
create index users_username_index on users (username);

alter table users
    add constraint users_pk unique (username);

alter table authorities
    rename column user_id to username;

alter table authorities
    alter column username type varchar(30),
    drop constraint authorities_user_id,
    add constraint authorities_username FOREIGN KEY (username) REFERENCES users (username);

-- changeSet evnag:6
alter table users
    add column enabled boolean default true;

-- changeSet evnag:7
alter table users
    drop column enabled,
    add column role text;

drop table authorities;

-- changeSet evnag:8
alter table users
    rename column username to user_name;