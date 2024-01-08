import { Tour } from "../../../db/models";

const guiderFields = {
  Guider: {
    tours: async (guider, _, { loaders }) => {
      const tours = await Tour.find({ guider: guider.id });

      return loaders.tour.many(tours.map(({ id }) => id));
    },
    toursCount: async (guider, _) => {
      return Tour.countDocuments({ guider: guider.id });
    },
  },
};

export default guiderFields;
