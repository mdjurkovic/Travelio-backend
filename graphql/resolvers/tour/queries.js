import { Tour } from "../../../db/models";

const tourQueries = {
  tours: async (_, args, { loaders }) => {
    console.log(args);
    const tours = await Tour.find(args);

    const currentDate = new Date();

    const { completed, future } = tours.reduce(
      (result, tour) => {
        tour.departureDate > currentDate
          ? result.future.push(tour)
          : result.completed.push(tour);
        return result;
      },
      { completed: [], future: [] }
    );

    future.sort((a, b) => a.departureDate - b.departureDate);
    completed.sort((a, b) => b.departureDate - a.departureDate);

    const sortedTours = [...future, ...completed];

    return loaders.tour.many(sortedTours.map(({ id }) => id));
  },
  tour: async (_, { id }, { loaders }) => await loaders.tour.one(id),
};

export default tourQueries;
