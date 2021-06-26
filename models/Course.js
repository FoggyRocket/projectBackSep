
const mongoose = require("mongoose");
const { Schema,model } = mongoose;



const courseSchema = new Schema({

    name:{
        type:String,
        unique:[true,"Ya existe ese curso"],
        required:[true,"Debes agrega un nombre para tu curso"]
    },
    _campus:{
        type:Schema.Types.ObjectId,
        ref:'Campus',
        required:[true,"Debes agrega un campus"]
    },
    _students:[
        {
            type:Schema.Types.ObjectId,
            ref:'User',
        }
    ]

},{timestamps:true})




module.exports = model("Course",courseSchema)