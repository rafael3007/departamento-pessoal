import mongoose from "mongoose";

const pessoaScheema = new mongoose.Schema(
    {
        id: {type: String},
        nome: {type: String, required: true},
        cpf: {type: String, required: true},
        cidade: {type: String, required: true},
        estado: {type: String, required: true},
        estado_civil: {type: String, required: true},
        idade: {type: Number, required: true}
    }
);

const pessoas = mongoose.model('Pessoas',pessoaScheema)

export default pessoas;