import { resolver } from 'graphql-sequelize';
import { spec_entreprise } from '../../models';
import to from 'await-to-js';

export const SpecEntrepriseMap = {
    entreprise: resolver(spec_entreprise.associations.entreprise),
    specialite: resolver(spec_entreprise.associations.specialite)
};