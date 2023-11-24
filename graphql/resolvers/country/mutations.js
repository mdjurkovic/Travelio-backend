import { Country } from "../../../db/models";

const countryMutations = {
  createCountry: async (_, name, { loaders }) => {
    const newCountry = new Country(name);

    const savedCountry = await newCountry.save();

    return loaders.country.one(savedCountry._id);
  },
  updateCountry: async (_, { id, country }, { loaders }) => {
    await Country.findByIdAndUpdate(
      id,
      {
        $set: { ...country },
      },
      { new: true }
    );

    return loaders.country.one(id);
  },
  deleteCountry: async (_, { id }) => {
    return Country.findByIdAndRemove(id);
  },
};

export default countryMutations;
