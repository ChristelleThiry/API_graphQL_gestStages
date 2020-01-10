import { Query } from './professeur.query';
import { ProfesseurMap } from "./professeur.map";
import { Mutation } from "./professeur.mutation";

export const resolver = {
  Query: Query,
  professeur: ProfesseurMap,
  Mutation: Mutation
};
