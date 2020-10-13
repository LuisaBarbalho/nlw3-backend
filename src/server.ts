import express, { response } from 'express';
import path from 'path';

import './database/connection';
import routes from './routes';

const app = express();
app.use(express.json());
app.use(routes);

// Acessar imagens pela url apresentada pela view
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));

app.listen(3333);