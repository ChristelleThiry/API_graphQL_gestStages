import { resolver } from 'graphql-sequelize';
import { prof_classe } from '../../models';
import to from 'await-to-js';

export const ProfClasseMap = {
    classe: resolver(prof_classe.associations.classe),
    professeur: resolver(prof_classe.associations.professeur)
};