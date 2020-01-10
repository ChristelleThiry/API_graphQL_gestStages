import { resolver } from 'graphql-sequelize';
import { prof_classe, professeur } from '../../models';
import to from 'await-to-js';

export const ProfesseurMap = {
    prof_classes: resolver(professeur.associations.prof_classes),
    jwt: (professeur) => professeur.getJwt(),
};