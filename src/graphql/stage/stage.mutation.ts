import { resolver as rs } from 'graphql-sequelize';
import { stage } from '../../models';

export const Mutation = {
    createStage: rs(stage, {
      after: (stage) => {
        return stage;
      }
    }),
};