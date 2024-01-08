import { Country, Excursion, Tour } from "../../../db/models";

const destinationFields = {
  Destination: {
    tours: async (destination, _, { loaders }) => {
      const tours = await Tour.find({ destination: destination.id });

      return loaders.tour.many(tours.map(({ id }) => id));
    },
    excursions: async (destination, _, { loaders }) => {
      const excursions = await Excursion.find({ destination: destination.id });

      return loaders.excursion.many(excursions.map(({ id }) => id));
    },
    country: async (destination, _, { loaders }) => {
      const country = await Country.findById(destination.country);

      return loaders.country.one(country.id);
    },
  },
};

export default destinationFields;
