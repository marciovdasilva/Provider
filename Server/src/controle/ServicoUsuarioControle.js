const ServicoUsuario = require('../entidade/servicoUsuario')
const Usuario = require('../entidade/usuario')
const Ocupacao = require('../entidade/ocupacao')

const validaUsuario = async idUsuario =>{

    const validaUsuario = await Usuario.findById(idUsuario)
    
    return validaUsuario != null ? true : false
}

const validaOcupacao = async idOcupacao =>{

    const validaOcupacao = await Ocupacao.findById(idOcupacao)
    
    return validaOcupacao != null ? true : false
}

module.exports = {
    async get(request, response){
        
        const idUsuarioDaRequest = request.params.idUsuario

        console.log('Aqui consultar', idUsuarioDaRequest)

        const servicoUsuario = await ServicoUsuario.find({usuario:idUsuarioDaRequest})

        console.log('Aqui consultar', idUsuarioDaRequest, servicoUsuario)

        return response.json(servicoUsuario.map(i => i.ocupacao))
    },
    async gravar(request, response){
        const {idUsuario, ocupacao} = request.body
        if (!validaUsuario(idUsuario) ){
            return response.status(400).json({
                status: "Erro",
                mensagem: "Usuario não encontrado."
            })
        }

        console.log('Aqui gravar', request.body)

        await ServicoUsuario.deleteMany({usuario: idUsuario})

        for (const servico of ocupacao) {
            
            const servicoUsuario = {
                usuario: idUsuario,
                ocupacao: servico
            }

           if(validaOcupacao(servico)) {
                await ServicoUsuario.create(servicoUsuario)
                

           }
        }

       
        return response.json({
            idUsuario
        })
    },
    async servicoUsuario(request, response) {
        return response.json(await ServicoUsuario.find())
    }

    
}   