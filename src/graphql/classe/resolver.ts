import { Query } from './classe.query';
import { ClasseMap } from "./classe.map";
import { Mutation } from "./classe.mutation";

export const resolver = {
  Query: Query,
  classe: ClasseMap,
  Mutation: Mutation,
};
