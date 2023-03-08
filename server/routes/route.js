const express = require('express')
const route = express.Router()
const controller = require('../controller/controller')


// const {
//     getAllUsers,
//     AddNewUsers,
//     getUserById,
//     UpdateUser,
//     DeleteUser,
//   } = require("../controller/controller");
// router.route("/").get(getAllUsers).post(AddNewUsers);
// router.route("/:id").get(getUserById).put(UpdateUser).delete(DeleteUser);



route.post('/api/users', controller.AddNewUsers);
route.get('/api/users', controller.getAllUsers);
route.get('/api/users/:id', controller.getUserById);
route.put('/api/users/:id', controller.UpdateUser);
route.delete('/api/users/:id', controller.DeleteUser);


module.exports = route