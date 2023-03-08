const mongoose =  require('mongoose')


const Schema = mongoose.Schema;
const crudSchema = new Schema({
  name: String,
  email: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("CRUDAPP", crudSchema);



// var schema = new mongoose.Schema({
//     name : {
//         type : String,
//         required: true
//     },
//     email : {
//         type: String,
//         required: true,
//         unique: true
//     },
//     gender : String,
//     status : String
// })
// const Userdb = mongoose.model('userdb', schema);
// module.exports = Userdb;



// const LoginSchema = mongoose.Schema({
//     name:{
//         type:String,
//         required:true
//     },
//     password:{
//         type:String,
//         required:true        
//     }
// })
// const collection = mongoose.model('collection1' , LoginSchema )
