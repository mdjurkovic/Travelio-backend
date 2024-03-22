import { model, Schema } from "mongoose";

export const PassengerSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String },
    phone: { type: String },
    jmbg: { type: String },
    passport: { type: String },
  },
  {
    timestamps: true,
  }
);

export default model("Passenger", PassengerSchema);
