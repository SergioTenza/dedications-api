import Task from '../models/Task'

export const createTask = async (req, res) => {
    const {inicio, duracion, logo, skin, tema, texto, urls, machine, user,mesas,estado,ejecucion} = req.body
    const newTask = new Task({inicio, duracion, logo, skin, tema, texto, urls, machine, user,mesas,estado,ejecucion});
    try {
        const taskSaved = await newTask.save();
        res.status(201).json(taskSaved);    
    } catch (error) {
        res.status(422).json(error)   
    }
    
}
export const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);    
    } catch (error) {
        res.status(404).json(error)   
    }
    
}
export const getTaskById = async (req, res) => {
    try {
        const task = await Task.findById(req.params.taskId);
        res.status(200).json(task);    
    } catch (error) {
        res.status(404).json(error)   
    }    
}
export const updateTaskById = async (req, res) => {
    console.log(req.body);
    const { updatedAt } = req.body
    try {
        const task = await Task.findById(req.params.taskId);    
    } catch (error) {
        res.status(404).json(error)   
    }    

    var date1 = new Date(updatedAt);
    var date2 = new Date(task.updatedAt);

    if (date1.getTime() > date2.getTime()) {
        try {
            const updatedTask = await Task.findByIdAndUpdate(req.params.taskId, req.body, {
            new: true
            });
            res.status(200).json(updatedTask);           
        } catch (error) {
            res.status(304).json(error); 
        }        
    }
    else
    {
        res.status(304).json(task);       
    }
    
}
export const deleteTaskById = async (req, res) => {
    const {taskId} = req.params;
    try {
        await Task.findByIdAndDelete(taskId);
        res.status(204).json();    
    } catch (error) {
        res.status(404).json(error);
    }
    
}