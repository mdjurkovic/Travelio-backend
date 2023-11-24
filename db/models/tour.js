import { model, Schema } from "mongoose";

const TourSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    route: { type: String },
    departureDate: { type: Date },
    returnDate: { type: Date },
    nights: { type: Number },
    guider: { type: Schema.Types.ObjectId, ref: "Guider", required: true },
    destination: {
      type: Schema.Types.ObjectId,
      ref: "Destination",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model("Tour", TourSchema);
