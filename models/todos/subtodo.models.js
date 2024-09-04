import mongoose from 'mongoose'

const subtodoScheme = new mongoose.Schema(
  {
    constent:{
      type: string,
      required: true,
    },
    complete:{
      type: Boolean,
      default: false,
    },
    createdBy:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    }

  },
  {
    timestamps:true
  }
)

export const subtodo = mongoose.model("subtodo",subtodoScheme)