const express  = require('express')
const dotenv = require('dotenv')
const connectDB = require('./server/database/connection')
const userRoutes = require('./server/routes/route')
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

dotenv.config({path:'config.env'})
const PORT = process.env.PORT || 5000

// app.use(express.urlencoded({extended:true}))


connectDB();
app.use("/", userRoutes);
app.listen(PORT , ()=>{
    console.log(`Application Started.... http://localhost:${PORT} `)
})


module.exports = app;