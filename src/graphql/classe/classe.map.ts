import { resolver } from 'graphql-sequelize';
import { classe, prof_classe } from '../../models';
import to from 'await-to-js';

export const ClasseMap = {
    etudiants: resolver(classe.associations.etudiants),
    prof_classes: resolver(classe.associations.prof_classes)
};