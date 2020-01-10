import { resolver as rs } from 'graphql-sequelize';
import { professeur } from '../../models';
import to from 'await-to-js';

export const Mutation = {
    createProfesseur: rs(professeur, {
      before: async (findOptions, { data }) => {
        let err, prof;
        [err, prof] = await to(professeur.create(data) );
        if (err) {
          throw err;
        }

        findOptions.where = { num_prof:prof.num_prof };
        return findOptions;
      },
      after: (prof) => {
        prof.connect = true;
        return prof;
      }
    }),
};