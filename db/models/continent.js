import { model, Schema } from "mongoose";

export const ContinentSchema = new Schema(
  {
    name: { type: String, required: true },
    code: { type: String, required: true },
    active: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

export default model("Continent", ContinentSchema);
