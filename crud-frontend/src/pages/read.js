import React, { useEffect, useState } from 'react';
import { read } from '../api';
import { Link } from 'react-router-dom';

function Read() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    read().then((data) => {
      setUsers(data);
    });
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Lista de Usuários</h1>
      {users.length === 0 ? (
        <p>Nenhum usuário encontrado.</p>
      ) : (
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {users.map((user) => (
            <li key={user.id}>
              {user.id} - {user.name} - {user.email}
            </li>
          ))}
        </ul>
      )}

    <br />

        <Link to="/">
            <button>Voltar para Home</button>
        </Link>
    </div>
  );
}

export default Read;
