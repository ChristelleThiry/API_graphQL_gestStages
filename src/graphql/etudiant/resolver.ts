import { Query } from './etudiant.query';
import { EtudiantMap } from "./etudiant.map";
import { Mutation } from "./etudiant.mutation";

export const resolver = {
  Query: Query,
  etudiant: EtudiantMap,
  Mutation: Mutation
};
