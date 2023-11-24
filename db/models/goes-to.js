import { model, Schema } from "mongoose";

const GoesToSchema = new Schema(
  {
    passenger: {
      type: Schema.Types.ObjectId,
      ref: "Passenger",
      required: true,
    },
    tour: {
      type: Schema.Types.ObjectId,
      ref: "Tour",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model("GoesTo", GoesToSchema);
