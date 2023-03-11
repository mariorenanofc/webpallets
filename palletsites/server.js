const express = require('express');
const bodyParser = require('body-parser');
const jsonServer = require('json-server');

const app = express();

// Configuração do bodyParser para tratar requisições com dados no formato JSON
app.use(bodyParser.json());

// Criação da rota customizada para criar um novo post
app.post('/posts', (req, res) => {
  const db = jsonServer.create();
  const router = jsonServer.router('db.json');
  const middlewares = jsonServer.defaults();

  // Adiciona o novo post ao banco de dados
  const newPost = {
    id: Date.now(),
    name: req.body.name,
    cpf: req.body.cpf,
    phone: req.body.phone,
    email: req.body.email,
    image: req.body.image
  };
  db.get('posts').push(newPost).write();

  // Retorna o novo post criado
  const post = db.get('posts').find({ id: newPost.id }).value();
  res.json(post);
});

// Inicia o servidor
app.listen(3000, () => {
  console.log('Server is running');
});
