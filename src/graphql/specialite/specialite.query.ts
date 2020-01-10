import { resolver } from 'graphql-sequelize';
import { specialite } from '../../models';
import to from 'await-to-js';
import { BeforeFindAfterOptions } from 'sequelize-typescript';

export const Query = {
    getSpecialite: resolver(specialite),

    getSpecialiteById: resolver(specialite, {
        after: async (specialite, { num_spec }) => {
            specialite.where = { num_spec };
            return specialite;
        }
    })
};