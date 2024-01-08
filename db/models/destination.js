import { model, Schema } from "mongoose";
import { DestinationTypeSchema } from "./destinationType";

const DestinationSchema = new Schema(
  {
    name: { type: String },
    country: { type: Schema.Types.ObjectId, ref: "Country" },
    type: [DestinationTypeSchema],
    image: { type: String },
  },
  {
    timestamps: true,
  }
);

export default model("Destination", DestinationSchema);
