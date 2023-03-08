const mongoose  = require('mongoose')

const dbconfig  = async()=>{
    try {
        const con = await mongoose.connect(process.env.MONGO_URI || "mongodb://localhost/CRUD" ,{
            useNewUrlParser: true,
    useUnifiedTopology: true,

        })
          
          console.log(`MongoDB Connect : ${con.connection.host}` )
    }  catch (error) {
        console.log(error)
        process.exit(1)
    }

}

module.exports = dbconfig

// Alternative Ways To connect to DB

// 1)
// mongoose.connect('mongodb://localhost:27017/CRUD')
// .then(()=>{
//     console.log('mongodb connected....')
// })
// .catch(()=>{
//     console.log("mongo not connected...")
// })

// 2)
// mongoose.connect(
//     process.env.MONGODB_URI || "mongodb://localhost/CRUD",
//     {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     },
//     (err) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log("Connected to MongoDB");
//       }
//     }
//   );
  