import { model, Schema } from "mongoose";

const TourSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    route: { type: String },
    departureDate: { type: Date, required: true },
    returnDate: { type: Date, required: true },
    nights: { type: Number },
    guider: { type: Schema.Types.ObjectId, ref: "Guider", default: null },
    destination: {
      type: Schema.Types.ObjectId,
      ref: "Destination",
    },
    maxPassengers: { type: Number, required: true },
    minPassengers: { type: Number, required: true },
    image: { type: String, default: "Default.jpeg" },
    passengers: { type: [String] },
  },
  {
    timestamps: true,
  }
);

export default model("Tour", TourSchema);
