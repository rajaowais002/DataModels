import mongoose from 'mongoose'

const productschema = new mongoose.Schema(
  {
    description:{
      type: String,
      required:true
    },
    price:{
      type: Number,
      default:0,
    },
    productImage:{
      type:String
    },
    stock:{
      default: 0,
      type:Number
    },
    category:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"Category"
    },
    owner:{
      type: mongoose.Schema.Types.ObjectId,
      ref:"User"
    }
  },
  {
    timestamps:true
  }
)

export const Product = mongoose.model("Product",productschema)