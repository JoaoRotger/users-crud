# CRUD de Usuários

Este projeto é uma aplicação simples de CRUD (Create, Read, Update, Delete) de usuários, composta por:

- Backend em Node.js + Express
- Frontend em React

---

## 1. Banco de dados

- Esta aplicação utiliza **PostgreSQL** como banco de dados.
- Certifique-se de que o PostgreSQL está instalado e em execução em sua máquina.
- Crie um banco de dados com o nome `crud_usuarios` (ou modifique o nome no código conforme necessário).
- Atualize as credenciais de conexão (host, usuário, senha, porta) no arquivo de configuração do backend (por exemplo, `db.js`, `.env`, ou diretamente onde a conexão é feita).
- As tabelas necessárias são criadas automaticamente ao iniciar a aplicação, se estiver usando um ORM como Sequelize (verifique se o projeto está configurado para isso).

---

## 2. Backend

### Requisitos

- Node.js (versão recomendada: 18 ou superior)
- npm (gerenciador de pacotes do Node)

### Instalação

1. Acesse o diretório do backend:

```
cd crud-api
```

2. Instale as dependências:

```
npm install
```

### Executando o servidor

```
npm start
```

O servidor será iniciado em `http://localhost:3001`.

---

## 3. Frontend

### Requisitos

- Node.js
- npm

### Instalação

1. Acesse o diretório do frontend:

```
cd crud-frontend
```

2. Instale as dependências:

```
npm install
```

### Executando o frontend

```
npm start
```

A aplicação estará disponível em `http://localhost:3000`.

---

## 4. Estrutura de funcionalidades

- **Create**: formulário para criação de novos usuários.
- **Read**: listagem de todos os usuários cadastrados.
- **Update**: busca por ID e edição de um usuário existente.
- **Delete**: busca por ID e exclusão de um usuário.

---

## 5. Uso da aplicação

- Acesse a aplicação em http://localhost:3000
- Cada botão levará a sua tela para realizar a ação (criar, modificar, listar ou apagar usuarios). Para voltar basta clicar no botão de home no fundo

## 6. Observações

- As chamadas do frontend para o backend são feitas através do arquivo `api.js` localizado na pasta do frontend.

## 7. Proximas atualizações

- Navegação facilitada entre os apções do CRUD
- UI e interface melhoradas
