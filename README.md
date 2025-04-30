
# CRUD de Usuários com Node.js, Express e Postgres

Este é um projeto de CRUD de usuários utilizando Node.js, Express e Postgres. Ele permite a criação, leitura, atualização e exclusão de usuários em um banco de dados Postgres.




## Funcionalidades

Criar um novo usuário: Endpoint POST /users

Listar todos os usuários: Endpoint GET /users

Buscar um usuário específico: Endpoint GET /users/:id

Atualizar um usuário: Endpoint PUT /users/:id

Deletar um usuário: Endpoint DELETE /users/:id

## Tecnologias

Node.js: Ambiente de execução JavaScript no backend

Express: Framework para construção de APIs

Postgres: Banco de dados relacional

pg (node-postgres): Cliente PostgreSQL para Node.js

## Como rodar o projeto

Backend

1. Clone este repositório:
'''
git clone https://github.com/JoaoRotger/crud-api.git
'''

2. Entre na pasta do backend
'''
cd crud-usuarios-backend
'''

3. Instale as dependencias:
'''
npm install
'''

4. Crie o banco de dados no Postgres:
'''
CREATE DATABASE crud_usuarios;
'''

5. Configure a conexão com o banco de dados:

Abra o arquivo server.js e verifique a string de conexão com o banco de dados Postgres, ajustando conforme necessário (como usuário, senha e nome do banco).

6. Inicie o servidor:
'''
npm start
'''
O servidor estará rodando em http://localhost:3000.

###Endpoints

    POST /users: Criar um novo usuário (Nome e Email obrigatórios).

    GET /users: Listar todos os usuários cadastrados.

    GET /users/:id: Buscar um usuário específico pelo ID.

    PUT /users/:id: Atualizar um usuário pelo ID (nome e email).

    <!-- DELETE /users/:id: Deletar um usuário pelo ID. -->