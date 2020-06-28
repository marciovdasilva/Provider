const mongoose = require('mongoose')
const UsuarioSchema = new mongoose.Schema({
    nome: String,
    email: String,
    senha: String,
    tipo: String,
    descricao: String
})
module.exports = mongoose.model('Usuario', UsuarioSchema)