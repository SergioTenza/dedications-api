import Task from '../models/Task'

export const createMachine = async (req, res) => {
    const {} = req.body
    const newMachine = new Task({});
    const machineSaved = await newMachine.save();
    res.status(201).json(machineSaved);
}
export const getMachines = async (req, res) => {
    const machines = await Machine.find();
    res.status(200).json(machines);
}
export const getMachineById = async (req, res) => {
    const machine = await Machine.findById(req.params.machineId);
    res.status(200).json(machine);
}
export const updateMachineById = async (req, res) => {
    const updatedMachine = await Machine.findByIdAndUpdate(req.params.machineId, req.body, {
        new: true
    });
    res.status(200).json(updatedMachine);   
}
export const deleteMachineById = async (req, res) => {
    const {machineId} = req.params;
    await Machine.findByIdAndDelete(machineId);
    res.status(204).json({message: 'maquina borrada correctamente.'});
}