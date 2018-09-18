/* navy_schema.sql */
DROP DATABASE IF EXISTS navys;

CREATE DATABASE navys;

\c navys;

CREATE TABLE ships (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  date_built DATE,
  fleet_id INTEGER NOT NULL
);

CREATE TABLE fleet (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE sailors (
  id SERIAL PRIMARY KEY NOT NULL,
  fullname VARCHAR(255) NOT NULL,
  dob DATE NOT NULL
);

CREATE TABLE duties (
  id SERIAL PRIMARY KEY NOT NULL,
  title VARCHAR(255) NOT NULL
);

CREATE TABLE ranks (
  id SERIAL PRIMARY KEY NOT NULL,
  ranking VARCHAR(80) NOT NULL
);

CREATE TABLE assignments (
  assignment_id SERIAL PRIMARY KEY NOT NULL,
  sailor_id INTEGER NOT NULL,
  ship_id INTEGER NOT NULL,
  rank_assigned INTEGER NOT NULL,
  duty_assigned INTEGER NOT NULL,
  start_duty DATE,
  end_duty DATE
);
