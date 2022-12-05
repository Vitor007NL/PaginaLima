const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser= require('cookie-parser');

const Longar = require('./Controllers/Users/Logar');
const Logado = require('./Controllers/Users/Logado');
const Deslogar = require('./Controllers/Users/Deslogar');

const app = express();
app.use(cors());
app.use(bobyParser.json());
app.use(cookieParser());
app.use('/Pages', express.static(__dirname+'/pages'));

const Database = require('./Database');

app.get('/', (req, res) => res.sendFile(__dirname+'/Pages/Index/index.html'));
app.get('/privado', (req, res) => res.send('Somente usuários logados podem ver isso.'));

app.get('/api/users/logar', async (req, res) =>{
    res.send(await Longar(req.body));
});
app.get('/api/users/deslogar', async (req, res) =>{
    res.send(await Deslogar());
});

app.listen (3000, () =>  {
    console.log('Servidor online')
});