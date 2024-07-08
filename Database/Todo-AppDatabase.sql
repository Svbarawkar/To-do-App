#TO-DO-Application Internship Task

#Here we created database todo_db
CREATE DATABASE todo_db;
USE todo_db;

#Created TodoItem Table
Create table TodoItem (
id int not null primary key,
title varchar(50),
description varchar(50),
completed boolean
);

#Describle Table Details
desc TodoItem;

#View all the records from Reactjs console
select * from todoitem;
