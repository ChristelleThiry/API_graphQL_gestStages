import { Sequelize } from 'sequelize-typescript';
import { ENV } from '../config/env.config';
import { from } from 'apollo-link';

export const sequelize = new Sequelize({
        host: ENV.DB_HOST,
        database: ENV.DB_NAME,
        port: +ENV.DB_PORT,
        dialect: ENV.DB_DIALECT,
        username: ENV.DB_USER,
        password: ENV.DB_PASSWORD,
        operatorsAliases: false,
        logging: false,
        storage: ':memory:',
        modelPaths: [__dirname + '/*.model.ts'],
        modelMatch: (filename, member) => {
           return filename.substring(0, filename.indexOf('.model')) === member.toLowerCase();
        },
});
export { etudiant } from './etudiant.model';
export { professeur } from './professeur.model';
export { classe } from './classe.model';
export { prof_classe } from './prof_classe.model';
export { spec_entreprise } from './spec_entreprise.model';
export { entreprise } from './entreprise.model';
export { specialite } from './specialite.model';
export { mission } from './mission.model';
export { stage } from './stage.model';

