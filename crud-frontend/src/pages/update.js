import React, { useState } from 'react';
import { search, update } from '../api';
import { Link } from 'react-router-dom';

function Update() {
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

  const handleUpdate = (event) => {
    event.preventDefault();
    const body = JSON.stringify({
      name: user.name,
      email: user.email
    });

    update(body, userId)
      .then(() => setStatus('Usuário atualizado com sucesso!'))
      .catch((error) => setStatus(error.message || 'Erro ao atualizar usuário'));
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Atualizar Usuário</h1>

      <div>
        <label>ID do usuário: </label>
        <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} />
        <button onClick={handleSearch}>Buscar</button>
      </div>

      {user && (
        <form onSubmit={handleUpdate} style={{ marginTop: '20px' }}>
          <div>
            <label>Nome: </label>
            <input
              type="text"
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              required
            />
          </div>
          <div>
            <label>Email: </label>
            <input
              type="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              required
            />
          </div>
          <button type="submit">Atualizar</button>
        </form>
      )}

      {status && <p style={{ marginTop: '20px' }}>{status}</p>}

      <br />
      <Link to="/"><button>Voltar para Home</button></Link>
    </div>
  );
}

export default Update;
