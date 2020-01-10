import { resolver as rs } from 'graphql-sequelize';
import { stage } from '../../models';
import to from 'await-to-js';

export const Mutation = {
    createStage: rs(stage, {
      after: (stage) => {
        return stage;
      }
    }),
};