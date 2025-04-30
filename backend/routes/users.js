const express = require('express');
const router = express.Router();
const pool = require('../db');

// Rota para criar um novo usuário
router.post('/', async (req, res) => {
  try {
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({ error: 'Nome e Email são obrigatórios' });
    }

    const newUser = await pool.query(
      'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',
      [name, email]
    );

    res.status(201).json(newUser.rows[0]);
  } catch (err) {
    console.error(err);
    if (err.code === '23505') { // erro de email duplicado
      return res.status(400).json({ error: 'Email já cadastrado' });
    }
    res.status(500).json({ error: 'Erro ao criar usuário' });
  }
});

// Rota para buscar todos os usuários
router.get('/', async (req, res) => {
    try {
      const allUsers = await pool.query('SELECT * FROM users ORDER BY id ASC');
      res.json(allUsers.rows);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Erro ao buscar usuários' });
    }
  });

// Rota para buscar um usuário específico pelo ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const user = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
  
    if (user.rows.length === 0) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }
  
    res.json(user.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao buscar usuário' });
  }
});

// Atualizar usuário por ID
router.put('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const { name, email } = req.body;
  
      if (!name || !email) {
        return res.status(400).json({ error: 'Nome e Email são obrigatórios' });
      }
  
      const updatedUser = await pool.query(
        'UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *',
        [name, email, id]
      );
  
      if (updatedUser.rows.length === 0) {
        return res.status(404).json({ error: 'Usuário não encontrado' });
      }
  
      res.json(updatedUser.rows[0]);
    } catch (err) {
      console.error(err);
      if (err.code === '23505') { // tratando erro de email duplicado
        return res.status(400).json({ error: 'Email já cadastrado' });
      }
      res.status(500).json({ error: 'Erro ao atualizar usuário' });
    }
  });

// Deletar usuário por ID
router.delete('/:id', async (req, res) => {
    try {
      const { id } = req.params;
  
      const deletedUser = await pool.query('DELETE FROM users WHERE id = $1 RETURNING *', [id]);
  
      if (deletedUser.rows.length === 0) {
        return res.status(404).json({ error: 'Usuário não encontrado' });
      }
  
      res.json({ message: 'Usuário deletado com sucesso' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Erro ao deletar usuário' });
    }
  });

module.exports = router;
