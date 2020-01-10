import { resolver } from 'graphql-sequelize';
import { etudiant } from '../../models';
import to from 'await-to-js';

export const EtudiantMap = {
    classe: resolver(etudiant.associations.classe),
    jwt: (student) => student.getJwt(),
};