import { Query } from './prof_classe.query';
import { ProfClasseMap } from "./prof_classe.map";
import { Mutation } from "./prof_classe.mutation";

export const resolver = {
  Query: Query,
  prof_classe: ProfClasseMap,
  Mutation: Mutation,
};
