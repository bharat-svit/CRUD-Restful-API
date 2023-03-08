const UserModel = require('../models/model')


exports.getAllUsers = async()=>{
    return await UserModel.find(); 
}

exports.AddNewUsers = async(userdata)=>{
    return await UserModel.create(userdata); 
}

exports.getUserById = async(id)=>{
    return await UserModel.findById(id); 
}

exports.UpdateUser = async(id,data)=>{
    return await UserModel.findByIdAndUpdate(id,data); 
}

exports.DeleteUser = async(id)=>{
    return await UserModel.findByIdAndDelete(id); 
}