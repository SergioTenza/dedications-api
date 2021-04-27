import Agenda from '../models/Agenda'
import Task from '../models/Task'
import Machine from '../models/Machine'

export const getAgenda = async (req, res) => {
    try {
        const agenda = await Task.find();        
        res.status(200).json(agenda);    
    } catch (error) {
        res.status(500).json(error);
        return;    
    }        
}
export const getAgendaById = async (req, res) => {
    try {
        const fullAgenda = await Task.find({'user': req.params.userId});        
        res.status(200).json(fullAgenda);    
        
    } catch (error) {
        res.status(500).json(error);
        return;    
    }        
}

export const getAgendaByMachineId = async (req, res) => {
    try {
        const fullAgenda = await Task.find({'machine': req.params.machineId});
        res.status(200).json(fullAgenda);    
        
    } catch (error) {
        res.status(500).json(error);
        return;    
    }        
}
