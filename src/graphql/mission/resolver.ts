import { Query } from './mission.query';
import { MissionMap } from "./mission.map";
import { Mutation } from "./mission.mutation";

export const resolver = {
  Query: Query,
  mission: MissionMap,
  Mutation: Mutation,
};
