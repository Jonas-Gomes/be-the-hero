const express = require('express');
const routes = require('./routes');
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

/** 
 * Métodos HTTP:
 * 
 * GET: Buscar informações do back-end
 * POST: Criar um informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deleta uma informação no back-end
 * **/

/** 
 * Tipos de parâmetros:
 * 
 * Query params: Parâmetro nomeados enviados na rotaapós o simbolo de "?" (Filros, paginação)
 * Route params: Parâmetros utilizados para identificar recursos
 * Request body: Corpo da requisição, usado para criar ou alterar recursos
 * **/
