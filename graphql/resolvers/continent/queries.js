import {Continent} from "../../../db/models";

const continentQueries = {
    continents: async (_, args, {loaders}) => {
        let continents = await Continent.find();

        if (Object.keys(args).length) continents = continents.filter(continent => continent.active === args.active)

        return loaders.continent.many(continents.map(({id}) => id));
    },
    continent: async (_, {id}, {loaders}) => await loaders.continent.one(id)

};

export default continentQueries;
