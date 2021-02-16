import express from 'express';
import path from 'path';
import morgan from'morgan';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';


import {createRoles} from './libs/initialSetup';

import tasksRoutes from './routes/tasks.routes';
import authRoutes from './routes/auth.routes';
import usersRoutes from './routes/user.routes';
import machineRoutes from './routes/machine.routes';

const app = express();

//Global Variables
dotenv.config();
app.set('port', process.env.PORT || 5001);


createRoles();
// Middlewares
app.use(morgan('dev'));
app.use(express.json());
// for parsing application/json
app.use(bodyParser.json());
// for parsing application/xwww-
//app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/tasks', tasksRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/machine', machineRoutes);

app.get('/', (req, res) => {
    res.json({
        message: 'Bienvenido a la Api Dedications By FunPhotosSystems',
        email: 'Si quiere trabajar con nosotros pongase en contacto con tnzservicios@gmail.com'
    });
});

export default app;