import User from '../models/User';
import jwt from 'jsonwebtoken';
import Role from '../models/Role';

export const signup = async (req, res) => {
    const {username, email, password, roles} = req.body;

    console.log(username, email, password, roles);
    
    //const userFound = User.find({email});
    
    const newUser = new User({
        username,
        email,
        password: await User.encryptPassword(password)
    })
    
    if(roles) {
        
        try {
            const foundRoles = await Role.find({name: {$in: roles}});
            newUser.roles = foundRoles.map(role => role._id)
        } catch (error) {
            console.error(error)
        }
        
    }else{        
            const role = await Role.findOne({name: "user"});
            newUser.roles = [role._id];        
    }
    const savedUser = await newUser.save();
    
    console.log(savedUser);   

    const token = jwt.sign({id: savedUser._id},process.env.SECRET,{
        expiresIn : 86400 //1 dia en segundos
    });
    res.status(200).json({token});
};
export const signin = async (req, res) => {
    
    const userFound = await User.findOne({email: req.body.email}).populate("roles")
    
    if (!userFound) return res.status(400).render('400',{message:'usuario no encontrado o inexistente', status:'400'});

    const matchPassword = await User.comparePassword(req.body.password, userFound.password)

    if (!matchPassword) return res.status(401).json({token: null, message: 'invalid password', status:'401'}).render('401');
    
    const token = jwt.sign({id: userFound._id},process.env.SECRET,{
        expiresIn: 86400// 24 Horas en segundos
    })       
    res.status(200).json({token})        
};
