import React, { useState } from 'react';
import { create } from '../api';
import { Link } from 'react-router-dom';

function Create() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const body = JSON.stringify({name, email});
    create(body);
  };

  return (
    <div>
      <h1>Criar Usuário</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Nome:
            <input required type="text" name="name" onChange={(e) => setName(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input required type="email" name="email" onChange={(e) => setEmail(e.target.value)} />
          </label>
        </div>
        <div>
          <input type="submit" value="Enviar" />
        </div>
      </form>

      <br />

      <Link to="/">
        <button>Voltar para Home</button>
      </Link>
    </div>
  );
}

export default Create;
