import express from 'express'
import pessoas from './pessoasRoutes.js'
import bodyParser from 'body-parser';

//Arquivo principal de rotas da aplicação
const routes = (app) =>{

    // rota para teste da aplicação
    app.route('/').get((req,res)=>{
        res.status(200).send({result: "API is running"})
    })
    //rotas e 'configs' adicionais 
    app.use(
        express.json(),
        pessoas,
        bodyParser.json(),
        bodyParser.urlencoded({extended: false})
    )
}

export default routes