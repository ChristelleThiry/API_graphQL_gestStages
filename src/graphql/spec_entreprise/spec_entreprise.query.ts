import { resolver } from 'graphql-sequelize';
import { spec_entreprise } from '../../models';

export const Query = {
    getSpecEntreprise: resolver(spec_entreprise)
};