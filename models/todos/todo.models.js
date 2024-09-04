import mongoose from 'mongoose'

const todoScheme = new mongoose.Schema(
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

export const todo = mongoose.model("todo",todoScheme)