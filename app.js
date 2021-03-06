require("dotenv").config()//<=== importmos el dot env
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
//importamos mongoose y el dotenv
const mongoose = require("mongoose")
const cors = require("cors")


//Agregamos la conexion  de mongoose  
mongoose.connect(process.env.DB_PROD,{
    useUnifiedTopology:true
})
.then((x)=>{
    console.log(`Connect to Mongo! Database name: "${x.connections[0].name}"`)
}).catch((err)=>{
    console.log("Error connecting to mongo", err)
})




const app = express();
//utilizamos cors para darle permisos a otras apps

app.use(
        cors({
            origin:["http:localhost:3000","https://ironprojects.herokuapp.com"],
            credentials:true
        })
    );


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//estas son las rutass
//por practica le  agregamos prefijo api
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const authRouter = require('./routes/auth');
const campusRouter = require('./routes/campus');
const projectRouter = require('./routes/project');
const courseRouter = require('./routes/course')


app.use('/api', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/auth',authRouter);
app.use('/api/campus',campusRouter);
app.use('/api/project',projectRouter);
app.use('/api/course',courseRouter);
//app.use('/api/proucts',producRouter)

//una ueva ruta que tome por  defecto cuando refresquemo
app.use('*', (req,res)=>{
    res.sendFile(path.join(__dirname,"public","index.html"))
})

module.exports = app;
