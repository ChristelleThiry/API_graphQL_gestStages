import { resolver } from 'graphql-sequelize';
import { entreprise } from '../../models';
import to from 'await-to-js';

export const EntrepriseMap = {
    spec_entreprises: resolver(entreprise.associations.spec_entreprises),
};