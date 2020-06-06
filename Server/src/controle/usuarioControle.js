const Usuario = require('../entidade/usuario')
module.exports = {
    async get(request, response){
        const usuarios = await Usuario.find()
        response.json(usuarios)
    },
    async gravar(request, response){
        const usuario = request.body
        /*incluir validções*/
        const usuarioSalvo = await Usuario.create(usuario)
        response.json(usuarioSalvo)
    },
    async login (request, response){
        const {email, senha} = request.headers
        const validaUsuario = await Usuario.findOne({email})
        if(!validaUsuario){
            response.status(400).json({
                status: 'Erro',
                mensagem: 'Usuario inexistente' 
            })
        }
        if(senha != validaUsuario.senha){
            response.status(400).json({
                status: 'Erro',
                mensagem: 'Senha invalida' 
            })
        }
        response.json({
            status: 'Ok'
        })

    }
}   