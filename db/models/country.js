import { model, Schema } from "mongoose";

const CountrySchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    active: { type: Boolean },
    continent: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export default model("Country", CountrySchema);
