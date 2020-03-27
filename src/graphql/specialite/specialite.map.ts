import { resolver } from 'graphql-sequelize';
import { specialite } from '../../models';

export const SpecialiteMap = {
    spec_entreprises: resolver(specialite.associations.spec_entreprises)
};