//Esto nos va a servir para veerificar y crear el json web token, tambieen para limpiar al uuario

const jwt = require("jsonwebtoken");
const User = require("../models/User")



//creamos nuestro util

exports.createJWT = (user) =>{

    //vamos  crear el token!!
                    //jwt.sign(valoraEncryp, palabraSecreta,opciones)
    const token = jwt.sign({ id : user._id  },process.env.SECRET,{
        expiresIn:"1d"
    })

    return token
};


//Este nos va a servir para verificar si  tengo un usuario loggedo


exports.veryToken = (req,res,next) => {
    //desturar de req.cookies el token
    const { token } = req.cookies

    jwt.verify(token, process.env.SECRET, (error, decoded )=>{
        //va nuestro coddigo si falla o esta correcto
        if(error){
            return res.status(401).json({ msg:"Tienes que tener una sesion", error })
        }
        //decoded = { id :"jdasjad89asj"}
        User.findById(decoded.id)
            .then(user => {
                req.user = user
                next()
            })

           

    });

}



//haremos un middelware para checar los roles 

                // ["USER","ADMIN"] || ["USER"] || ["ADMIN"]
exports.checkRole = (roles) => {


    return (req, res, next )=>{
        //voy  a sacar al usuario del req.user
        // {name:"Dylan",email:'dylan@perro.com',role:"USER",...} = req.user
        const {role} = req.user
        if(roles.includes(role)){
            return next()
        }else{
            return res.status(403).json({msg:"No tienes  permiso para realizar esta  acción"})
        }
    }

}

//limpiar el objeto
            // data = {}
exports.clearRes = (data) => {
        //destructuramos el objeto "data" y retornamoss un nuevo objecto unicamente con
        // los datos requeridos para nuestro "desarrollador = dev "
        const {password , __v , updatedAt,...cleanedData} = data

        return  cleanedData


}