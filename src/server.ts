import express, { response } from 'express';

const app = express();
app.use(express.json());

import './database/connection';

app.get('/users/:id', (request, response) => {
    return response.json({message: 'Hello World'});
});

app.listen(3333);