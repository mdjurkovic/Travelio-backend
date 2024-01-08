import { Country } from "../../../db/models";

const countryQueries = {
  countries: async (_, args, { loaders }) => {
    const countries = await Country.find(args);
    countries.sort((a, b) => a.name.localeCompare(b.name));

    return loaders.country.many(countries.map(({ id }) => id));
  },

  country: async (_, { id }, { loaders }) => await loaders.country.one(id),
};

export default countryQueries;
