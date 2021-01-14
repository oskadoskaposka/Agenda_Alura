const config = require ('./config/customExpress')
const conexao = require ('./infraestrutura/conexao')

conexao.connect(erro => {
	if(erro){
		console.log(erro)
	}
	else{
		console.log('Conectado com banco')
		const app = config()
		
		app.listen(3030, () => {
			console.log('Tudo ok!!!')
		})
	}
})

