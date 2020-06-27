const Ocupacao = require('../entidade/ocupacao')
module.exports = {
    async get(request, response){
        const ocupacoes = await Ocupacao.find()
        response.json(ocupacoes)
    },
    async gravar(request, response){
        const ocupacao = request.body
        /*incluir validções*/
        const ocupacaoSalvo = await Ocupacao.create(ocupacao)
        response.json(ocupacaoSalvo)
    },
    async ocup (request, response){
        const {ocupacao} = request.headers
        const validaOcupacao = await Ocupacao.findOne({ocupacao})
        if(!validaOcupacao){
            response.status(400).json({
                status: 'Erro',
                mensagem: 'Ocupação inexistente' 
            })
        }
        response.json({
            status: 'Ok'

        })

    }
}