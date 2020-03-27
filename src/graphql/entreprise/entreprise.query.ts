import { resolver } from 'graphql-sequelize';
import { entreprise } from '../../models';

export const Query = {
    getEntreprise: resolver(entreprise)
};