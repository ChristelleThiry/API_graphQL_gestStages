import { resolver } from 'graphql-sequelize';
import { stage } from '../../models';
import to from 'await-to-js';

export const Query = {
    getStages: resolver(stage, {
        after: (stage) => {
            return stage;
        }
    }),
    getStageById: resolver(stage, {
        after: async (stage, { num_stage }) => {
            stage.where = { num_stage };
            return stage;
        }
    })
};