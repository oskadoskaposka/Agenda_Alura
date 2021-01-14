const config = require ('./config/customExpress')

const app = config()

app.listen(3030, () => {
	console.log('Tudo ok!!!')
})
