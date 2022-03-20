const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require("crypto");

const userSchema = mongoose.Schema({

    name:{
        type:String,
        required: [true , "Please provide your name" ],
        maxLength:[ 30 , " Name cannot exceed 30 characters"],
        minlength:[ 4, " name shoud have more than 4 characters"]
    },
    email:{
        type:String,
        required: [true , "Please provide your email" ],
        unique:true,
        validate:[ validator.isEmail, " Please enter a valid email"],

    },
    password:{
        type:String,
        required: [true , "Please provide password" ],
        minlength:[ 6, "password shoud have more than 6 characters"],
        select : false
    },
    avatar :
        {
            public_id:{
                type:String,
                required:true
            },
            url:{
                type:String,
                required:true
            }
        },
        role:{
            type:String,
            default: "user"
        },
        resetPasswordToken : String,
        resetPasswordExpire: Date

});

userSchema.pre("save", async function(next){

    if(!this.isModified('password')){
        next();
    }
    this.password = await bcrypt.hash(this.password, 10);
})

// JWT token generate

userSchema.methods.getJWTToken = function (){
    return jwt.sign({ id: this._id}, process.env.jwt_SECRET, {
        expiresIn : process.env.JWT_EXPIRE,
    })
}

userSchema.methods.comparePassword = async function(enpassword){

     return  await bcrypt.compare(enpassword , this.password);
}


// Generating Password Reset Token
userSchema.methods.getResetPasswordToken = function () {
    // Generating Token
    const resetToken = crypto.randomBytes(20).toString("hex");
  
    // Hashing and adding resetPasswordToken to userSchema
    this.resetPasswordToken = crypto
      .createHash("sha256")
      .update(resetToken)
      .digest("hex");
  
    this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;
  
    return resetToken;
  };



module.exports = mongoose.model("user" , userSchema);