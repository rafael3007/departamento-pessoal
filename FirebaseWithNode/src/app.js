import express  from 'express';
import conexaoBD from './database/index.js';
import routes from './routes/index.js'

//conexão com o banco de dados
conexaoBD()

const app = express();
routes(app)


export default app