const express = require('express')

const app = express()

app.listen(3030, () => {
	console.log('Tudo ok!!!')
})

app.get('/banana', (req, res) => {
	res.send('Deu certo!!!')
})