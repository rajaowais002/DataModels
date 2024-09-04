import mongoose from 'mongoose'

const userschema = new mongoose.Schema(
  {
    username:{
      type: String,
      required:true,
      unique:true
    },
    password:{
      type: String|Number,
      required:true,
      unique:true
    }
  },
  {
    timestamps:true
  }
)

export const User = mongoose.model("User",userschema)