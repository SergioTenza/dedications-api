import mongoose from 'mongoose';
import config from './config';

mongoose.connect(config.CONNECTION_STRING,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true
})
    .then(db => console.log('DB is connected'))
    .catch(error => console.log(error))