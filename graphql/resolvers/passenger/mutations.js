import {Passenger} from "../../../db/models";

const passengerMutations = {
    createPassenger: async (_, {passenger}, {loaders}) => {
        const newPassenger = new Passenger(passenger);

        const savedPassenger = await newPassenger.save();

        return loaders.passenger.one(savedPassenger.id)
    },
    updatePassenger: async (_, {id, passenger}, {loaders}) => {
        await Passenger.findByIdAndUpdate(
            id,
            {
                $set: {...passenger},
            },
            {new: true}
        );

        return loaders.passenger.one(id)
    },
};

export default passengerMutations;
