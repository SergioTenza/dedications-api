import {Schema, model} from 'mongoose';

const machineSchema = new Schema({
    name: String,
    privateid: String,
    location: String,
    user: [{
        ref :"User",
        type: Schema.Types.ObjectId
    }],
    tasks:[{
        ref :"Task",
        type: Schema.Types.ObjectId
    }],
    status: String
},{
    versionKey: false
});

export default model('Machine', machineSchema)