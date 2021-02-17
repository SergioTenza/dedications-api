import Task from '../models/Task'

export const createFact = async (req, res) => {
    const {fecha, horaInicio, horaFinal, logo, skin, tema, texto} = req.body
    const newTask = new Task({fecha, horaInicio, horaFinal, logo, skin, tema, texto});
    const taskSaved = await newTask.save();
    res.status(201).json(taskSaved);
}
export const getFacts = async (req, res) => {
    const tasks = await Task.find();
    res.status(200).json(tasks);
}
export const getFactById = async (req, res) => {
    const task = await Task.findById(req.params.taskId);
    res.status(200).json(task);
}
export const updateFactById = async (req, res) => {
    const updatedTask = await Task.findByIdAndUpdate(req.params.taskId, req.body, {
        new: true
    });
    res.status(200).json(updatedTask);   
}
export const deleteFactById = async (req, res) => {
    const {taskId} = req.params;
    await Task.findByIdAndDelete(taskId);
    res.status(204).json();
}

export const getFactCustomerById = async (req, res) => {
    const task = await Task.findById(req.params.taskId);
    res.status(200).json(task);
}