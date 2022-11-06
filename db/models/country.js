import {model, Schema} from "mongoose";

const CountrySchema = new Schema(
    {
        name: {type: String, required: true},
        active: {type: Boolean, required: true, default: true},
        continent: {
            type: Schema.Types.ObjectId,
            ref: "Continent",
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export default model("Country", CountrySchema);
