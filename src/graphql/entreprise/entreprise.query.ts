import { resolver } from 'graphql-sequelize';
import { entreprise } from '../../models';
import to from 'await-to-js';

export const Query = {
    getEntreprise: resolver(entreprise)
};