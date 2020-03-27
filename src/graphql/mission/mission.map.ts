import { resolver } from 'graphql-sequelize';
import { mission } from '../../models';

export const MissionMap = {
    stage: resolver(mission.associations.stage),
};