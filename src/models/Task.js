import {Schema, model} from 'mongoose';

const taskSchema = new Schema({    
    inicio: String,
    duracion: String,
    logo: String,
    skin: String,
    tema: String,
    texto: String,
    estado: String,
    ejecucion: Number,
    urls: [String],
    machine:{
        ref :"Machine",
        type: Schema.Types.ObjectId
    },
    user:{
        ref :"User",
        type: Schema.Types.ObjectId
    },
    mesas:[{
        name: String,
        participants: [String]
    }]

},{
    timestamps: true,
    versionKey: false
});

export default model('Task', taskSchema);