import { model, Schema } from "mongoose";

export const DestinationTypeSchema = new Schema(
  {
    label: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export default model("DestinationType", DestinationTypeSchema);
