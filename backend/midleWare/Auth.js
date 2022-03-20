const ErrorHandeler =require('../utils//ErrorHandeler');
const catchAsyncError = require('./catchAsyncError');
const jwt = require('jsonwebtoken');
const User = require('../models/userModal');

exports.isAuthUser = catchAsyncError( async ( req , res , next) =>{
    const  { token } = req.cookies;
    console.log(token);
    if(!token){
        return next( new ErrorHandeler("Please Login to use this resource" , 401));
    }

    const decodedData = jwt.verify(token, process.env.jwt_SECRET);

    req.user = await User.findById(decodedData.id);

    next();
});

exports.autherRole = ( ...roles) =>{
    return (req , res , next)=>{
        if(!roles.includes(req.user.role)){
            return next(
                new ErrorHandeler(`Role: ${req.user.role} is not allowed to access this resource ` , 403)
            );
           
        }
        next();
    }
}