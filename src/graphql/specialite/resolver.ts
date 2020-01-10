import { Query } from './specialite.query';
import { SpecialiteMap } from "./specialite.map";
import { Mutation } from "./specialite.mutation";

export const resolver = {
  Query: Query,
  specialite: SpecialiteMap,
  Mutation: Mutation,
};
