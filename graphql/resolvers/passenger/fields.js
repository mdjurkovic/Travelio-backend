import {GoesTo} from "../../../db/models";

const passengerFields = {
    Passenger: {
        tours: async (passenger, _, {loaders}) => {
            const tours = await GoesTo.find({passenger: passenger.id});

            return loaders.tour.many(tours.map(({tour}) => tour));
        },
    },
};

export default passengerFields;
