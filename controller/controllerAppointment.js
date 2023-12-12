const path = require('path');

const rootDir = require('../util/path');

const User = require('../models/book');



exports.getUser = async (req, res, next) => {
    try{
        const users = await User.findAll();
        console.log("users");
        console.log(users);
        res.status(200).json(users)
    } catch (error) {
        console.log('Get user is failing', JSON.stringify(error));
        res.status(500).json({error:error})
    }
}


exports.postUser = async (req, res, next) => {
    try{
        console.log('Received POST request for adding user:', req.body);
        if(!req.body.phone){
            throw new Error('Phone number is mandatory')
        }

        const {name,email,phone} = req.body;
        console.log(req.body);
        // const name = req.body.name;
        // const email = req.body.email;
        // const phone = req.body.phone;
        const data = await User.create({
            name:name,
            email:email,
            phone:phone
        })
        console.log('updated success');
        console.log('User created successfully:', data);
        res.status(201).json(data)
    }
    catch(error){
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Error creating user' });
    }
}

exports.deleteUser = async (req, res, next) => {
    try{
        if(req.params.id == 'undefined'){
            console.log('ID is Missing');
            return res. status(400).json({err:'ID is missing'})
        }
        const userId = req.params.id;
        await User.destroy({where:{id:userId}});
        res.sendStatus(200);
    } catch (err){
        console.error('Error deleting user:', err);
        res.status(500).json({ error: 'Error deleting user' });
    }
}