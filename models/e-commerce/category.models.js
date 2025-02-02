import mongoose from 'mongoose';

const categoryschema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    }
  },
  {
    timestamps: true,
  }
);

export const Category = mongoose.model('Category', categoryschema);
