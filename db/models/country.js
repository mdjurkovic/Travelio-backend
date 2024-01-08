import { model, Schema } from "mongoose";

const CountrySchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    active: { type: Boolean, default: true },
    continent: { type: String },
  },
  {
    timestamps: true,
  }
);

export default model("Country", CountrySchema);
