const express = require('express');
const { Client } = require('pg');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config(); // Carrega as variáveis do .env

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors({ origin: '*' })); // Permite todas as origens
app.use(express.json()); // Interpretar JSON no corpo das requisições

// Conexão com o banco de dados PostgreSQL
const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }, // Necessário para o Render
});

// Conectar ao banco
client.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err.stack);
  } else {
    console.log('Conexão com o banco de dados estabelecida.');
  }
});

// Teste do backend
app.get('/', (req, res) => {
  res.send('Servidor funcionando!');
});

// Endpoint para cadastro de usuário
app.post('/register', async (req, res) => {
  const { name, email, password, dob } = req.body;

  if (!name || !email || !password || !dob) {
    return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
  }

  try {
    const query = 'INSERT INTO users (name, email, password, dob) VALUES ($1, $2, $3, $4)';
    const values = [name, email, password, dob];
    await client.query(query, values);
    res.status(201).send('Usuário cadastrado com sucesso.');
  } catch (err) {
    console.error('Erro ao cadastrar usuário:', err.stack);
    res.status(500).json({ message: 'Erro ao cadastrar usuário.' });
  }
});


// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});




// Endpoint para login de usuário
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
      return res.status(400).json({ message: 'E-mail e senha são obrigatórios.' });
  }

  try {
      const query = 'SELECT * FROM users WHERE email = $1 AND password = $2';
      const values = [email, password];
      const result = await client.query(query, values);

      if (result.rows.length > 0) {
          // Usuário encontrado e autenticado
          res.status(200).send('Login bem-sucedido.');
      } else {
          res.status(401).json({ message: 'Credenciais incorretas.' });
      }
  } catch (err) {
      console.error('Erro ao realizar login:', err.stack);
      res.status(500).json({ message: 'Erro ao realizar login.' });
  }
});
