import { resolver } from 'graphql-sequelize';
import { stage } from '../../models';

export const Query = {
    getStages: resolver(stage, {
        after: (stage) => {
            return stage;
        }
    }),
    getStageById: resolver(stage, {
        after: (stage, { num_stage }) => {
            stage.where = { num_stage };
            return stage;
        }
    })
};