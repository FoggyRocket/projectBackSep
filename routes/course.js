//Express router  model middelwae
const express = require("express")
const router = express.Router();
const Course = require("../models/Course");
const { checkRole, veryToken } = require("../util/auth-mid");



/**
 * C //
 * R //
 * U //
 * D! //
 */


// Listing All Course by Campus
        // www.dylanejemplo.com/api/course/hauishdsadisausduisad
router.get('/:campus',(req,res)=>{
    const { campus } = req.params
    Course.find({ _campus:campus })
        .then(courses => {
            res.status(200).json({result:courses})
        })
        .catch(error=>res.status(400).json({ error }))
})


// buscar un por id 
router.get('/detailCourse/:course_id',()=>{
    const { course_id  } = req.params

    //Populate!!!
    Course.findById(course_id)
        .then(course => {
            res.status(200).json({result:course})
        })
        .catch(error=>res.status(400).json({ error }))
})

// creeamos
router.post('/', veryToken, checkRole(['ADMIN']),(req,res)=>{

    //req.body = { key:"value"}
    //Model.method({...})
    Course.create(req.body)
    .then(course => {
        res.status(200).json({result:course})
    })
    .catch(error=>res.status(400).json({ error }))
})

//actualizar
router.patch("/updateCourse/:course_id",veryToken,checkRole(['ADMIN']),(req, res)=>{
    //para darle mas cache o comodidad vamos a destructurarlo
    const { course_id } = req.params

    Course.findByIdAndUpdate(course_id, req.body,{new:true} )
    .then(updateCourse => {
        res.status(200).json({result:updateCourse})
    })
    .catch(error=>res.status(400).json({ error }))
})

// Eliminamos
router.delete("/deleteCourse/:course_id",veryToken,checkRole(['ADMIN']),(req, res)=>{
    //para darle mas cache o comodidad vamos a destructurarlo
    const { course_id } = req.params

    Course.findByIdAndDelete( course_id )
    .then(() => {
        res.status(200).json({msg:"Se borro el curso"})
    })
    .catch(error=>res.status(400).json({ error }))
})


module.exports = router;
