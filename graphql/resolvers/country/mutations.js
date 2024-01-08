import { Country } from "../../../db/models";

const countryMutations = {
  createCountry: async (_, name, { loaders }) => {
    const newCountry = new Country(name);

    const savedCountry = await newCountry.save();

    return loaders.country.one(savedCountry._id);
  },

  updateCountry: async (_, { id, active }, { loaders }) => {
    await Country.findByIdAndUpdate(
      id,
      {
        active: active,
      },
      { new: true }
    );

    return loaders.country.one(id);
  },

  deleteCountry: async (_, { id }, { loaders }) => {
    await Country.findByIdAndRemove(id);

    return loaders.country.one(id);
  },
};

export default countryMutations;
