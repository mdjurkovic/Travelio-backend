import {Continent} from "../../../db/models";

const continentMutations = {
    createContinent: async (_, {continent}, {loaders}) => {
        const newContinent = new Continent(continent);

        const savedContinent = await newContinent.save();

        return loaders.continent.one(savedContinent._id);
    },
    updateContinent: async (_, {id, continent}, {loaders}) => {
        await Continent.findByIdAndUpdate(
            id,
            {
                $set: {...continent},
            },
            {new: true}
        );

        return loaders.continent.one(id);
    },
};

export default continentMutations;
