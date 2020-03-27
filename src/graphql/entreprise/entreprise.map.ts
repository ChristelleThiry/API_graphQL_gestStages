import { resolver } from 'graphql-sequelize';
import { entreprise } from '../../models';

export const EntrepriseMap = {
    spec_entreprises: resolver(entreprise.associations.spec_entreprises),
};