module.exports = app => {
	app.get('/atendimentos', (req, res) => {
		res.send('GET Deu certo!!!')
	})

	app.post('/atendimentos', (req, res) => {
		console.log(req.body)

		res.send('POST Deu certo!!!!')
	})
}