//express router model y middelwaree
const express = require("express")
const router = express.Router();
const Project = require("../models/Project");
const { checkRole, veryToken } = require("../util/auth-mid");




/**
 * C
 * R
 * U
 * D
 */



//

router.post('/create',veryToken,checkRole(['USER']), (req,res)=>{
//req.user = {_id:"dasdasd" ,name:"addasda"}
        const { _id : _owner } = req.user
        //_owner : "dasdasd"
        // name
        Project.create({...req.body,_owner})
        .then(project => {
            res.status(200).json({result:project})
        })
        .catch(error=>res.status(400).json({ error }))
})

router.patch('/updateProject/:project_id',veryToken,checkRole(['USER']),(req,res)=>{

        const {_id : _owner} = req.user
        const {project_id} = req.params
                //findOneAndUpdate
        Project.findOneAndUpdate({ _id:project_id, _owner},req.body,{new:true})
        .then(updateProject=>{
            res.status(200).json({result:updateProject})
        })
        .catch(error=>res.status(400).json({ error,msg:"Seguro es  tuyo??" }))
     
})

//listar proyectos por  curso
router.get('/:course_id',(req,res)=>{
    const {course_id} = req.params
    Project.find({_course:course_id})
    .then(projects => {
        res.status(200).json({result:projects})
    })
    .catch(error=>res.status(400).json({ error }))
})

//me falta una ruta een curso












module.exports = router