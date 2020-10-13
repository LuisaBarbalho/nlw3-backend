import express, { response } from 'express';

// Cria uma aplicação
const app = express();

// Para que o express leia o json
app.use(express.json());

// Rota = conjunto
// Recurso = usuario
// Método HTTP = GET, POST, PUT, DELETE

// Parâmetros
// Query: http://localhost:port/rota?parametro=valor -> ex.: http://localhost:3333/users?search=luisa
// Route Params (Identificar um recurso): http://localhost:port/rota/parametro -> ex.: http://localhost:3333/users/1 -> app.get('/users/:id', () => ... 
// Body (formulário, informações mais compostas) 

// O segundo parâmetro recebe automaticamente dois parametros: requests, response
app.get('/users/:id', (request, response) => {
    console.log(request.query);
    console.log(request.params);
    console.log(request.body);

    return response.json({message: 'Hello World'});
});

// Porta 3333 -> localhost:3333
app.listen(3333);

// Requisição -> Resposta
// Express - framework simples em Node

// -------------------------------------------

// MVC
// M - Models - representatividade de um dado (ex.: usuário)
// V - View -> poder determinar o que é enviado ao frontend (não é necessário enviar a senha do usuário, por exemplo)
// C - Controller - rotas -> métodos (criar, editar, deletar, etc)

