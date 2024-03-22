import { Guider } from "../../../db/models";

const guiderMutations = {
  createGuider: async (_, name, { loaders }) => {
    const newGuider = new Guider(name);

    const savedGuider = await newGuider.save();

    return loaders.guider.one(savedGuider.id);
  },
  updateGuider: async (_, { id, guider }, { loaders }) => {
    await Guider.findByIdAndUpdate(
      id,
      {
        name: guider,
      },
      // get the new version of record after update
      // default returns old value
      { new: true }
    );

    return loaders.guider.one(id);
  },
  deleteGuider: async (_, { id }, { loaders }) => {
    await Guider.findByIdAndUpdate(id, {
      active: false,
    });

    return loaders.guider.one(id);
  },
};

export default guiderMutations;
