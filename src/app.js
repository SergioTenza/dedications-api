import express from 'express';
import path from 'path';
import morgan from'morgan';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';


import {createRoles} from './libs/initialSetup';

import tasksRoutes from './routes/tasks.routes';
import authRoutes from './routes/auth.routes';
import usersRoutes from './routes/user.routes';
import machineRoutes from './routes/machine.routes';
import factsRoutes from './routes/facturacion.routes';
import agendaRoutes from './routes/agenda.routes';

const app = express();

//Global Variables
dotenv.config();
app.set('port', process.env.PORT || 5001);
createRoles();

const specs = require('./openapi.json');
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs, {explorer: true})
);
app.use(cors());
// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(helmet());

app.use('/api/tasks', tasksRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/machine', machineRoutes);
app.use('/api/fact', factsRoutes);
app.use('/api/agenda', agendaRoutes);

app.get('/api', (req, res) => {
    res.json({
        message: 'Bienvenido a la Api Dedications By FunPhotosSystems',
        email: 'Si quiere trabajar con nosotros pongase en contacto con tnzservicios@gmail.com'
    });
});

export default app;