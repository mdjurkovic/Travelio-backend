import { model, Schema } from "mongoose";
import { DestinationTypeSchema } from "./destinationType";

const GuiderSchema = new Schema(
  {
    name: { type: String, required: true },
    preferences: [DestinationTypeSchema],
    tours: { type: Schema.Types.ObjectId, ref: "Tour" },
    active: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

export default model("Guider", GuiderSchema);
