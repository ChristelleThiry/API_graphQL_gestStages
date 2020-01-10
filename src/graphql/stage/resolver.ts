import { Query } from './stage.query';
import { StageMap } from "./stage.map";
import { Mutation } from "./stage.mutation";
import { GraphQLScalarType } from 'graphql';
import { Kind } from 'graphql/language';

export const resolver = {
  Query: Query,
  stage: StageMap,
  Mutation: Mutation,
  Date: new GraphQLScalarType({
    name: 'Date',
    description: 'Date custom scalar type',
    parseValue(value) {
      return new Date(value); // value from the client
    },
    serialize(value) {
      return value; // value sent to the client
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return parseInt(ast.value, 10); // ast value is always in string format
      }
      return null;
    },
  })
};
