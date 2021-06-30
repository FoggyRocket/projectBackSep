const mongoose = require("mongoose");
const { Schema,model } = mongoose;



const projectSchema = new Schema({

    name:{
        type:String,
        required:[true,"Debes agrega un nombre para tu proyecto"]
    },
    moduleNumber:{
        type:String,
        enum:["Module 1", "Module 2", "Module 3"]
    },
    slideURL:{
        type:String,
        default:''
    },
    gitURL:{
        type:String,
        default:''
    },
    pageURL:{
        type:String,
        default:''
    },
    _owner:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:[true,"Debes agrega un usuario"]
    },
    _course:{
        type:Schema.Types.ObjectId,
        ref:'Course',
        required:[true,"Debes agrega un curso"]
    }

},{timestamps:true})




module.exports = model("Project",projectSchema)