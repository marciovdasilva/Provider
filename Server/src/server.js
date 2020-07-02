const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')
const UsuarioControle = require('./controle/usuarioControle')
const OcupacaoControle = require('./controle/ocupacaoControle')
const ServicoUsuarioControle = require('./controle/ServicoUsuarioControle')
const app = express()

mongoose.connect('mongodb+srv://Provider:admin@provider-6lt3y.mongodb.net/<dbname>?retryWrites=true&w=majority',{/*configurar banco atlas*/ useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(express.json())
app.use(cors())

app.get('/usuario', UsuarioControle.get) 
app.post('/usuario', UsuarioControle.gravar)
app.get('/usuario/:id', UsuarioControle.getUsuario)
app.get('/login', UsuarioControle.login)

app.get('/ocupacao', OcupacaoControle.get) 
app.post('/ocupacao', OcupacaoControle.gravar)
app.get('/ocup', OcupacaoControle.ocup)

app.get('/servicoUsuario/:idUsuario', ServicoUsuarioControle.get) 
app.post('/servicoUsuario', ServicoUsuarioControle.gravar)
app.get('/servicoUsuario', ServicoUsuarioControle.servicoUsuario)
app.get('/prestadores/:idOcupacao', ServicoUsuarioControle.getUsuarioPorOcupacao)



app.listen(3333)

