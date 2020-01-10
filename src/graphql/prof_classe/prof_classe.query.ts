import { resolver } from 'graphql-sequelize';
import { prof_classe } from '../../models';
import to from 'await-to-js';
import { BeforeFindAfterOptions } from 'sequelize-typescript';

export const Query = {
    getProfClasse: resolver(prof_classe)
};