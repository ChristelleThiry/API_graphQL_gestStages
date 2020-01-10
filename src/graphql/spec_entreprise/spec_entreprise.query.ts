import { resolver } from 'graphql-sequelize';
import { spec_entreprise } from '../../models';
import to from 'await-to-js';
import { BeforeFindAfterOptions } from 'sequelize-typescript';

export const Query = {
    getSpecEntreprise: resolver(spec_entreprise)
};