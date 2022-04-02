import db from './config/dbConnect.js'

const conexaoBD = () => {
    db.on("error",console.log.bind(console, 'erro de conexão'));
    db.once('open',()=>{
        console.log('Conexão com o banco de Dados realizada com sucesso!')
    });
}

export default conexaoBD