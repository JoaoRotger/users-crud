import React, { useState } from 'react';
import { remove, search } from '../api';
import { Link } from 'react-router-dom';

function Delete() {
  const [userId, setUserId] = useState('');
  const [user, setUser] = useState(null);
  const [status, setStatus] = useState('');

  const handleSearch = () => {
    search(userId).then((data) => {
      if (data?.id) {
        setUser(data);
        setStatus('');
      } else {
        setUser(null);
        setStatus('Usuário não encontrado');
      }
    });
  };

  const handleDelete = () => {
    remove(userId)
      .then(() => {
        setStatus('Usuário deletado com sucesso');
        setUser(null);
        setUserId('');
      })
      .catch((error) => {
        setStatus(error.message || 'Erro ao deletar usuário');
      });
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Deletar Usuário</h1>

      <div>
        <label>ID do usuário: </label>
        <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} />
        <button onClick={handleSearch}>Buscar</button>
      </div>

      {user && (
        <div style={{ marginTop: '20px' }}>
          <p><strong>ID:</strong> {user.id}</p>
          <p><strong>Nome:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <button onClick={handleDelete} style={{ backgroundColor: 'red', color: 'white' }}>
            Deletar
          </button>
        </div>
      )}

      {status && <p style={{ marginTop: '20px' }}>{status}</p>}

      <br />

        <Link to="/">
            <button>Voltar para Home</button>
        </Link>
    </div>
  );
}

export default Delete;
