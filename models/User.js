//import mongoose y destructuralo 

const mongoose = require("mongoose");
const { Schema , model } = mongoose;


const userSchema = new Schema({

    name:{
        type:String,
        required:[true,"Debes agregar un nombre"],
        minlength:1,
    },
    email:{
        type:String,
        unique:[true,"Ya existe este correo electronico"],
        required:[true,"Debes agregar un correo electronico"],
    },
    password:{
        type:String,
        required:[true,"Debes agregar una cotraseña"],
    },
    role:{
        type:String,
        default:"USER",
        emun:["ADMIN","USER"]
    }

},{timestamps:true})


                //model("ElnombreComoExportamosElModello",estrucura)
module.exports = model("User",userSchema)