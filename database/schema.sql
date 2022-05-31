/*  Execute this file from the command line by typing:
 *    mysql -u root -p < database/schema.sql
 *  to create the database and the tables.*/
drop database hidden_treasures;

create database hidden_treasures;
use hidden_treasures;

create table users (
  user_id bigint(20) not null auto_increment,
  url_id varchar(36) default (uuid()),
  email varchar(50) not null,
  created_at timestamp default current_timestamp,
  primary key(user_id),
  unique index uq_email (email),
  unique index uq_user_id (user_id)
);

create table categories (
  category_id bigint(20) not null auto_increment,
  name varchar(100) not null,
  primary key(category_id),
  unique index uq_category_id (category_id)
);

create table posts (
  post_id bigint(20) not null auto_increment,
  url_id varchar(255) default (uuid()),
  title varchar(75) not null,
  price varchar(255) not null,
  city varchar(255) not null,
  postal_code varchar(255),
  description text not null,
  make varchar(255),
  model varchar(255),
  size varchar(255),
  condition_description varchar(255),
  contact_name varchar(255) not null,
  email varchar(255) not null,
  phone_number varchar(255),
  created_at timestamp default current_timestamp,
  category_id bigint(20) not null,
  user_id bigint(20) not null,
  primary key(post_id),
  unique index uq_post_id (post_id),
  foreign key(category_id) references categories(category_id),
  foreign key(user_id) references users(user_id)
);

create table pictures (
  picture_id bigint(20) not null auto_increment,
  url varchar(100) not null,
  primary key(picture_id),
  post_id bigint(20),
  unique index uq_picture_id (picture_id),
  foreign key(post_id) references posts(post_id)
);