import {model, Schema} from "mongoose";

const ContinentSchema = new Schema(
    {
        name: {type: String, required: true},
        active: {type: Boolean, required: true, default: true},
    },
    {
        timestamps: true,
    }
);

export default model("Continent", ContinentSchema);
