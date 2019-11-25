import { Schema } from 'mongoose';

export const userSchema = new Schema(
  {
    rut: { type: String, required: true, unique: true },
    firtsName: { type: String, required: true },
    lastName: { type: String, required: true },
    phone: { type: String, required: true },
    sex: { type: String, required: true },
    email: { type: String, required: true },
    addresses: [
      {
        address: { type: String, required: true },
      },
      { default: [] },
    ],
  },
  {
    timestamps: true,
  },
);
