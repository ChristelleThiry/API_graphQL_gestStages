import { resolver } from 'graphql-sequelize';
import { etudiant } from '../../models';

export const EtudiantMap = {
    classe: resolver(etudiant.associations.classe),
    jwt: (student) => student.getJwt(),
};