import { resolver as rs } from 'graphql-sequelize';
import { entreprise } from '../../models';
import to from 'await-to-js';

export const Mutation = {
    createEntreprise: rs(entreprise, {
      before: async (findOptions, { data }) => {
        let err, entreprise;
        [err, entreprise] = await to(entreprise.create(data) );
        if (err) {
          throw err;
        }

        findOptions.where = { num_entreprise:entreprise.num_entreprise };
        return findOptions;
      },
      after: (entreprise) => {
        return entreprise;
      }
    }),
};