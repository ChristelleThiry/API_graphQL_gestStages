import { resolver } from 'graphql-sequelize';
import { classe } from '../../models';
import to from 'await-to-js';
import { BeforeFindAfterOptions } from 'sequelize-typescript';

export const Query = {
    getClasse: resolver(classe),

    getClasseById: resolver(classe, {
        after: async (classe, { num_classe }) => {
            classe.where = { num_classe };
            return classe;
        }
    }),

    getClasses: resolver(classe),
};