import { resolver } from 'graphql-sequelize';
import { mission } from '../../models';
import to from 'await-to-js';

export const MissionMap = {
    stage: resolver(mission.associations.stage),
};