import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>CRUD Usuários</h1>
      Hello World!
      <ul>
        <li>
          <Link to="create">Criar Novo Usuário</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="read">Lista de Usuários</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="delete">Apagar Usuário</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="update">Atualizar Usuário</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;