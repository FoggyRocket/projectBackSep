const express = require('express');
const router = express.Router();
//import el modelo que utilizare
const User = require("../models/User")
//importar lass herramientas a utilizar
const  bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

//Este archivo solo vamos 3 rutas LOGIN - SIGNUP - LOGOUT
// todas con el  metodo post

router.post('/', (req, res, next)  => {
  res.json({msg:'respond with a resource'})
});

module.exports = router;
