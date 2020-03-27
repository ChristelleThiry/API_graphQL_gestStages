import { resolver } from 'graphql-sequelize';
import { specialite } from '../../models';

export const Query = {
    getSpecialite: resolver(specialite),

    getSpecialiteById: resolver(specialite, {
        after: async (specialite, { num_spec }) => {
            specialite.where = { num_spec };
            return specialite;
        }
    })
};