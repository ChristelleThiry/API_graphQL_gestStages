import { resolver } from 'graphql-sequelize';
import { mission } from '../../models';

export const Query = {
    getMission: resolver(mission),

    getMissionById: resolver(mission, {
        after: async (mission, { num_mission }) => {
            mission.where = { num_mission };
            return mission;
        }
    })
};