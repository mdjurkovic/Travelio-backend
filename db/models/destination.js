import { model, Schema } from "mongoose";
import { DestinationTypeSchema } from "./destinationType";

const DestinationSchema = new Schema(
  {
    name: { type: String, required: true },
    country: { type: Schema.Types.ObjectId, ref: "Country", required: true },
    type: [DestinationTypeSchema],
  },
  {
    timestamps: true,
  }
);

export default model("Destination", DestinationSchema);
