

const mongoose = require("mongoose");
const {Schema, model} = mongoose;


const campusSchema = new Schema({

    name:{
        type:String,
        enum:["Amsterdam","Barcelona","Berlin","Lisbon","Madrid","CDMX","Miami","Paris","Sao Paulo"],
        required:[true,"Debes agregar un Nombre"],
        unique:[true,"El campus ya existe"]
    },

},{timestamps:true})



module.exports = model("Campus",campusSchema)