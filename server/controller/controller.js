const service  = require('../service/render')


exports.getAllUsers = async (req,res) => {

    try {
        const users = await service.getAllUsers();
        res.status(200).json({data: users , status : 'success'});
    } catch (err) {
        res.status(500).json({error:err});
    }
};


exports.AddNewUsers = async(req,res) => {
    try {
        const user = await service.AddNewUsers(req.body)
        res.status(200).json({data: user , status : 'success'})
    } catch (error) {
        res.status(500).json({error : error})
    }
}

exports.getUserById = async(req,res) => {

    try {
        const user = await service.getUserById(req.params.id)
        res.json({data: user , status : 'success'})
    } catch (error) {
        res.status(500).json({error : error})
    }
}

exports.UpdateUser = async(req,res) => {

    try {
        const user = await service.UpdateUser(req.params.id, req.body)
        res.json({data: user , status : 'success'})
    } catch (error) {
        res.status(500).json({error : error})
    }
}

exports.DeleteUser = async(req,res) => {

    try {
        const user = await service.DeleteUser(req.params.id)
        res.json({data: user , status : 'success'})
    } catch (error) {
        res.status(500).json({error : error})
    }
}