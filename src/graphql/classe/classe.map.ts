import { resolver } from 'graphql-sequelize';
import { classe } from '../../models';

export const ClasseMap = {
    etudiants: resolver(classe.associations.etudiants),
    prof_classes: resolver(classe.associations.prof_classes)
};