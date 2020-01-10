import { Query } from './spec_entreprise.query';
import { SpecEntrepriseMap } from "./spec_entreprise.map";
import { Mutation } from "./spec_entreprise.mutation";

export const resolver = {
  Query: Query,
  spec_entreprise: SpecEntrepriseMap,
  Mutation: Mutation,
};
