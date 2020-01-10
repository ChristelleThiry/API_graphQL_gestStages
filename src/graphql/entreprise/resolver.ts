import { Query } from './entreprise.query';
import { EntrepriseMap } from "./entreprise.map";
import { Mutation } from "./entreprise.mutation";

export const resolver = {
  Query: Query,
  entreprise: EntrepriseMap,
  Mutation: Mutation
};
