const express = require('express');
const app = express();


app.use((res, res, next) => {
	res.status(200).send({
		mensagem: 'Ok, deu boa'
	})
});

modeule.exports = app;