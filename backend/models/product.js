const mongoose =require("mongoose");


const ProductSchema = mongoose.Schema({
    name:{     
        type :String,
        required:[true, "Please provide Product name"],
        trim:true
    },
    desc:{   
        type :String,
        required:[true, "Please provide Product name"]
    },
    price:{
        type :String,
        required:[true, "Please provide Product name"],
        maxLength:[8 , "Price cannot exceed 8 characters"]
    },
    ratings:{
        type: Number,
        default:0
    },
 
    images:[
        {
            public_id:{
                type:String,
                required: true
            },
         url:{
             type:String,
             required: true 
            }
        }
    ],
  category:{
      type: String,
      required:[true, "Please provide Product category"]
  }, 
  stock:{
      type:Number,
      required:[true, "Please provide Product stock"],
      maxLength:[4 , "Price cannot exceed 4 characters"],
      default:1
  },  
  NOReviews:{
      type:Number,
      default:0
  },   
  reviews:[
      {
        user: {
            type: mongoose.Schema.ObjectId,
            ref: "User",
            required: true,
          },
          name:{
              type:String,
              required:true
          },
          rating:{
              type:Number,
              required:true
          },
          comment:{
              type:String,
              required:true
          }
      }
  ], 
  createDate:{
      type:Date,
      default: Date.now
  }   
})



module.exports = mongoose.model('product',ProductSchema)