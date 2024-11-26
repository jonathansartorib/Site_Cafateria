const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const db = new sqlite3.Database('./cafeteria.db', (err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
    } else {
        console.log('Conectado ao banco de dados SQLite.');
    }
});

// Rota de Login
app.post('/login', (req, res) => {
    const { email, senha } = req.body;

    const query = 'SELECT * FROM users WHERE email = ? AND senha = ?';
    db.get(query, [email, senha], (err, row) => {
        if (err) {
            res.status(500).json({ error: 'Erro no servidor' });
        } else if (row) {
            res.json({ success: true, message: 'Login bem-sucedido!' });
        } else {
            res.status(401).json({ success: false, message: 'Credenciais inválidas' });
        }
    });
});

// Inicia o servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
