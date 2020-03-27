import { resolver } from 'graphql-sequelize';
import { prof_classe } from '../../models';

export const Query = {
    getProfClasse: resolver(prof_classe)
};