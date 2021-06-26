const express = require('express');
const router = express.Router();
//import el model(s) que se necesite
const Campus = require("../models/Campus");


//importamos loss utils
const { checkRole,veryToken } = require("../util/auth-mid")



/* Tengo que crear un crud completo si es necesario
   C.R.U.D
   C = Create   / POST
   R = Read     / GET
   U = Update   / POST, PATCH, PUT
   D = Delete   / DELETE
*/

/* 
  GET Campuss listing.
 Listar Campuss
*/
router.get('/', (req, res, next)=> {
  
    Campus.find()
    .then( campus =>{
      res.status(200).json({result:campus})
    })
    .catch( error => res.status(400).json( {error} ) )

});

//Creamos un campuss validando el  usuaruio que este logedo y sea ADMIN

router.post('/createCampus',veryToken,checkRole( ["ADMIN"] ) ,(req,res)=>{

    const {name} = req.body

    Campus.create({ name })
    .then( campus =>{
        res.status(200).json({result:campus})
      })
      .catch( error => res.status(400).json( {error} ) )
})





module.exports = router;
