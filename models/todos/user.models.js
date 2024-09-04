import mongoose from 'mongoose';

const schema = new mongoose.Schema(
  {
    username: {
      type: String,
      lowercase: true,
      required: true,
    },
    email: {
      type: String,
      lowercase: true,
      required: true,
      unique: true,
    },
    password: Number,
  },
  { timestamps: true }
);

export const User = mongoose.model('User', schema);
