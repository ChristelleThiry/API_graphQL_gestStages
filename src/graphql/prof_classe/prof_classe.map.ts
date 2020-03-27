import { resolver } from 'graphql-sequelize';
import { prof_classe } from '../../models';

export const ProfClasseMap = {
    classe: resolver(prof_classe.associations.classe),
    professeur: resolver(prof_classe.associations.professeur)
};