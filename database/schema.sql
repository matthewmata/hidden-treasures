/*  Execute this file from the command line by typing:
 *    mysql -u root -p < database/schema.sql
 *  to create the database and the tables.*/
drop database sellme;

create database sellme;
use sellme;

create table users (
  user_id bigint(20) not null auto_increment,
  url_id varchar(36) default (uuid()),
  name varchar(50) not null,
  screen_name varchar(50) not null,
  verified boolean default 0,
  email varchar(50) not null,
  password_hash varchar(60) not null,
  profile_image_url_https varchar(255),
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

create table items (
  item_id bigint(20) not null auto_increment,
  title varchar(75) not null,
  price varchar(255) null,
  title_city varchar(255) null,
  postal_code varchar(255) not null,
  description text not null,
  make varchar(255) null,
  model varchar(255) null,
  size varchar(255) null,
  condition_description varchar(255) null,
  language varchar(255) not null,
  cryptocurrency_ok boolean not null,
  delivery_ok boolean null,
  email varchar(255) null,
  show_phone_number boolean null,
  phone_calls_ok boolean null,
  text_sms_ok boolean null,
  phone_number varchar(255) null,
  extension varchar(255) null,
  contact_name varchar(255) null,
  show_address varchar(255) null,
  street varchar(255) null,
  cross_street varchar(255) null,
  city varchar(255) null,
  item_image_url_https varchar(255),
  url varchar(255) not null,
  created_at timestamp default current_timestamp,
  category_id bigint(20) not null,
  user_id bigint(20) not null,
  primary key(item_id),
  unique index uq_email (email),
  unique index uq_item_id (item_id),
  foreign key(category_id) references categories(category_id),
  foreign key(user_id) references users(user_id)
);