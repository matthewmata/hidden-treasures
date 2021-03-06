/*  Execute this file from the command line by typing:
 *    mysql -u root -p < database/schema.sql
 *  to create the database and the tables.*/
drop database hidden_treasures;

create database hidden_treasures;
use hidden_treasures;

create table categories (
  category_id bigint(20) not null auto_increment,
  name varchar(100) not null,
  primary key(category_id),
  unique index uq_category_id (category_id)
);

create table posts (
  post_id bigint(20) not null auto_increment,
  post_url_id varchar(255) not null,
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
  user_id varchar(255) not null,
  primary key(post_id),
  unique index uq_post_url_id (post_url_id),
  foreign key(category_id) references categories(category_id)
);

create table pictures (
  picture_id bigint(20) not null auto_increment,
  picture_url varchar(100) not null,
  primary key(picture_id),
  post_url_id varchar(255),
  unique index uq_picture_id (picture_id),
  foreign key(post_url_id) references posts(post_url_id)
);