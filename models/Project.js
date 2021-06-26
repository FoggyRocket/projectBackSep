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
    slideURL:String,
    gitURL:String,
    pageURL:String,
    _owner:{
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    _course:{
        type:Schema.Types.ObjectId,
        ref:'Course'
    }

},{timestamps:true})




module.exports = model("Project",projectSchema)