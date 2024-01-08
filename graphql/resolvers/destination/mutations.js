import { Destination } from "../../../db/models";

const destinationMutations = {
  createDestination: async (_, { destination }, { loaders }) => {
    console.log(destination);
    const newDestination = new Destination(destination);

    const savedDestination = await newDestination.save();

    return loaders.destination.one(savedDestination._id);
  },
  updateDestination: async (_, { id, destination }, { loaders }) => {
    await Destination.findByIdAndUpdate(
      id,
      {
        $set: { ...destination },
      },
      { new: true }
    );

    return loaders.destination.one(id);
  },
  deleteDestination: async (_, { id }, { loaders }) => {
    await Destination.findByIdAndRemove(id);

    return loaders.destination.one(id);
  },
};

export default destinationMutations;
