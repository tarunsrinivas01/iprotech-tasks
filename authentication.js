const jwt=require('jsonwebtoken')
const User=require('../models/user')

//when the user logs in we save make ,
// jwt token and save it in the localstorage,for every CRUD request
//made in the client side we receive a authorization token from client side
//which is set in headers after receiving it we verify it in the server side


exports.authentication=(req,res,next)=>{
   try {
    const token=req.header('Authorisation')
    const user=jwt.verify(token,'Tarun@123')
    console.log(user)
    User.findByPk(user.userid)
    .then(user=>{
        req.user=user
        next()
    })
   } catch (error) {
    console.log(error)
    res.status(401).json({message:error})
   }
}