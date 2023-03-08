# CRUD-Restful-API
Restful Api using MongoDB-Express-NodeJs


 **-*** CALL REQUEST FLOW ***-***
connection.js
    ^
    |
  app.js <----calls----router.js <------calls------ controller.js <-----calls---- service.js <-----calls-----model.js
                

  ********CRUD API************

  1)Get all user : GET
  http://localhost:5000/api/users
  
  2)Add new User : POST
  http://localhost:5000/api/users

  3)Update User : PUT
  http://localhost:5000/api/users/:id
    
  4)delete User : DELETE
  http://localhost:5000/api/users/:id  

  5)Get User by Id : GET
  http://localhost:5000/api/users/:id


