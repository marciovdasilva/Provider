const mongoose = require('mongoose')
const OcupacoesSchema = new mongoose.Schema({
    ocupacao: String
})
module.exports = mongoose.model('Ocupacao', OcupacoesSchema
)