import { resolver } from 'graphql-sequelize';
import { specialite } from '../../models';
import to from 'await-to-js';

export const SpecialiteMap = {
    spec_entreprises: resolver(specialite.associations.spec_entreprises)
};