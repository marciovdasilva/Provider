const Usuario = require('../entidade/usuario')

module.exports = {
    async get(request, response){
        const usuarios = await Usuario.find()
        response.json(usuarios)
    },
    async getUsuario(request, response){
        const id = request.params.id
        const usuario = await Usuario.findOne({_id:id})
        let retorno = {
            _id: usuario._id,
            nome: usuario.nome, 
            email: usuario.email,
            tipo:usuario.tipo,
            descricao: usuario.descricao
        } 
        return response.json(retorno)

    },
    async gravar(request, response){
        const usuario = request.body
        const {email} = usuario
        const validaUsuario = await Usuario.findOne({email})

        if(validaUsuario){
            return response.status(400).json({
                status: 'Erro',
                mensagem: 'Usuario ou Senha ja cadastrados' 
            })
        }
        
        const usuarioSalvo = await Usuario.create(usuario)
        console.log(usuarioSalvo)
        return response.json(usuarioSalvo)
    },
    async login (request, response){
        const {email, senha} = request.headers
        const validaUsuario = await Usuario.findOne({email})
        
        if(!validaUsuario){
            return response.status(400).json({
                status: 'Erro',
                mensagem: 'Usuario inexistente' 
            })
        }
        if(senha != validaUsuario.senha){
            return response.status(400).json({
                status: 'Erro',
                mensagem: 'Senha invalida' 
            })
        }

        let retorno = {
            _id: validaUsuario._id,
            nome: validaUsuario.nome, 
            email: validaUsuario.email,
            tipo:validaUsuario.tipo
        }    

        return response.json(retorno)
    }

}   