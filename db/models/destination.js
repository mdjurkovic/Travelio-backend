import { model, Schema } from "mongoose";
import { DestinationTypeSchema } from "./destinationType";

const DestinationSchema = new Schema(
  {
    name: { type: String },
    country: { type: Schema.Types.ObjectId, ref: "Country" },
    active: { type: Boolean, default: true },
    type: [DestinationTypeSchema],
    image: { type: String, default: "Default.jpeg" },
  },
  {
    timestamps: true,
  }
);

export default model("Destination", DestinationSchema);
