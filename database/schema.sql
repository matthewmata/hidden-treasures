/*  Execute this file from the command line by typing:
 *    mysql -u root -p < database/schema.sql
 *  to create the database and the tables.*/
drop database sellme;

create database sellme;
use sellme;

CREATE TABLE users (
  id int not null auto_increment,
  name varchar(40) not null,
  screen_name varchar(40) not null,
  location varchar(40) not null,
  verified boolean not null,
  url varchar(1700) not null,
  profile_image_url_https varchar(1700) not null,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  primary key(id)
);

