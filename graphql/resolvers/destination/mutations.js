import { Destination } from "../../../db/models";

const destinationMutations = {
  createDestination: async (_, { destination }, { loaders }) => {
    const newDestination = new Destination(destination);

    const savedDestination = await newDestination.save();

    return loaders.destination.one(savedDestination._id);
  },
  updateDestination: async (_, { id, active }, { loaders }) => {
    await Destination.findByIdAndUpdate(
      id,
      {
        active: active,
      },
      { new: true }
    );

    return loaders.destination.one(id);
  },
  deleteDestination: async (_, { id }, { loaders }) => {
    await Destination.findByIdAndUpdate(id, {
      active: false,
    });

    return loaders.destination.one(id);
  },
};

export default destinationMutations;
