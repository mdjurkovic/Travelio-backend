import { Country } from "../../../db/models";

const continentFields = {
  Continent: {
    countries: async (continent, _, { loaders }) => {
      const countries = await Country.find({ continent: continent.code });

      return loaders.country.many(countries.map(({ id }) => id));
    },
  },
};

export default continentFields;
