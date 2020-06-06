const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')
const UsuarioControle = require('./controle/usuarioControle')
const app = express()

mongoose.connect('mongodb+srv://beserra:beserra@cluster0-xfp4a.mongodb.net/provider?retryWrites=true&w=majority',{/*configurar banco atlas*/
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(express.json())
app.use(cors())

app.get('/usuario', UsuarioControle.get) 
app.post('/usuario', UsuarioControle.gravar)
app.get('/login', UsuarioControle.login)



app.listen(3333)

