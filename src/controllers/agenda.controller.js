import Agenda from '../models/Agenda'
import Task from '../models/Task'

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
        const fullAgenda = await Task.find();
        
        fullAgenda.filter( item => {
            item.Machine === req.params.machineId                     
        });
        res.status(200).json(fullAgenda);    
        
    } catch (error) {
        res.status(500).json(error);
        return;    
    }        
}
