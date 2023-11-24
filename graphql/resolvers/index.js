import {
  continentFields,
  continentMutations,
  continentQueries,
} from "./continent";
import { countryFields, countryMutations, countryQueries } from "./country";
import {
  destinationFields,
  destinationMutations,
  destinationQueries,
} from "./destination";
import {
  destinationTypeFields,
  destinationTypeMutations,
  destinationTypeQueries,
} from "./destinationType";
import {
  excursionFields,
  excursionMutations,
  excursionQueries,
} from "./excursion";
import { guiderFields, guiderMutations, guiderQueries } from "./guider";
import { tourFields, tourMutations, tourQueries } from "./tour";
import {
  passengerFields,
  passengerMutations,
  passengerQueries,
} from "./passenger";

const resolvers = {
  Query: {
    ...continentQueries,
    ...countryQueries,
    ...destinationQueries,
    ...destinationTypeQueries,
    ...excursionQueries,
    ...guiderQueries,
    ...passengerQueries,
    ...tourQueries,
  },
  Mutation: {
    ...continentMutations,
    ...countryMutations,
    ...destinationMutations,
    ...destinationTypeMutations,
    ...excursionMutations,
    ...guiderMutations,
    ...passengerMutations,
    ...tourMutations,
  },
  ...continentFields,
  ...countryFields,
  ...destinationFields,
  ...destinationTypeFields,
  ...excursionFields,
  ...guiderFields,
  ...passengerFields,
  ...tourFields,
};

export default resolvers;
