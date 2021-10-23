const http = require('http');
const express = require('express'); //importa o express
const app = express(); //cria variável app que chama a função express
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/src/cadastro.html');
});

app.use((req, res) => {
	return res.json({
		Nome: req.body.nome,
		Email: req.body.email,
		Cpf: req.body.cpf
	});
});

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((app));

server.listen(port, hostname);