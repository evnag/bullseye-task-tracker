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
