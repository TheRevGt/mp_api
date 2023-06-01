
CREATE TABLE users (
    ID int IDENTITY(1,1) PRIMARY KEY,
    user_name varchar(100),
	password varchar(100),
	status bit
);
CREATE TABLE cites (
    ID int IDENTITY(1,1) PRIMARY KEY,
    name varchar(100),
	status bit,
    user_id int,
    FOREIGN KEY (user_id) REFERENCES users(ID)
);
CREATE TABLE cites_infos (
    ID int IDENTITY(1,1) PRIMARY KEY,
    cel varchar(11),
	city varchar(60),
	address varchar(256),
	status bit,
    cites_id int,
    FOREIGN KEY (cites_id) REFERENCES cites(ID)
);
CREATE TABLE cites_files (
    ID int IDENTITY(1,1) PRIMARY KEY,
    name varchar(256),
	type varchar(30),
	status bit,
    url varchar(256),
    cites_id int,
    FOREIGN KEY (cites_id) REFERENCES cites(ID)
);

DROP TABLE cites;
DROP TABLE users;
DROP TABLE cites_infos;
DROP TABLE cites_files;

INSERT INTO [dbo].[users] (user_name,password, status)
VALUES ('admin', '12345678', 0);
INSERT INTO [dbo].[cites] (name, status, user_id)
VALUES ('Fiscalia no 1', 0, 1);
INSERT INTO [dbo].[cites_infos] (cel, address, status, cites_id)
VALUES ('12345678','7 calle, zona 1 Solola', 0, 1);