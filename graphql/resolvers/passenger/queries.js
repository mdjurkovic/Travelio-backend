import {Passenger} from "../../../db/models";

const passengersQueries = {
    passengers: async (_, args, {loaders}) => {
        const passengers = await Passenger.find();

        return loaders.passenger.many(passengers.map(({id}) => id))
    },
    passenger: async (_, {id}, {loaders}) => await loaders.passenger.one(id),
};

export default passengersQueries;
