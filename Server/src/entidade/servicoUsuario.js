const mongoose = require('mongoose')

const ServicoUsuarioSchema = new mongoose.Schema({
    date: String,
    usuario:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario'
    },
    ocupacao: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Ocupacao'
    }
})

module.exports = mongoose.model('ServicoUsuario', ServicoUsuarioSchema)