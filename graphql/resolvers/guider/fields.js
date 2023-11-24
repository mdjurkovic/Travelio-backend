import { Tour } from "../../../db/models";

const guiderFields = {
  Guider: {
    tours: async (guider, _, { loaders }) => {
      const tours = await Tour.find({ guider: guider.id });

      return loaders.tour.many(tours.map(({ id }) => id));
    },
  },
};

export default guiderFields;
