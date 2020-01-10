import { resolver } from 'graphql-sequelize';
import { mission } from '../../models';
import to from 'await-to-js';
import { BeforeFindAfterOptions } from 'sequelize-typescript';

export const Query = {
    getMission: resolver(mission),

    getMissionById: resolver(mission, {
        after: async (mission, { num_mission }) => {
            mission.where = { num_mission };
            return mission;
        }
    })
};